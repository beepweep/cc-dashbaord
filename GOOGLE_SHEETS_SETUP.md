# Google Sheets Integration Setup

## Overview
The "Get Listed" form is configured to submit data to Google Sheets. Follow these steps to complete the setup.

## Setup Instructions

### Step 1: Create Google Sheet
1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it "Crypto Card Submissions"
4. Add these column headers in Row 1:

```
Timestamp | Contact Name | Email | Telegram | Card Name | Issuer | Website | Launch Date | Region | Supported Regions | Excluded Countries | Image URL | Payment Network | Card Type | Material | Base Currency | Status | Issuance Fee | Monthly Fee | FX Fee | ATM Fee | Top-Up Fee | Inactivity Fee | Replacement Fee | Custody Fee | Liquidation Fee | Free ATM Limit | Daily Limit | Monthly Limit | Min Balance | Top-Up Limits | Base Cashback | Max Cashback | Boost | Reward Currency | Reward Cap | Merchant Rebates | Staking Yield | Welcome Bonus | Referral Bonus | Referral T&C | Additional Points | Required Token | Fiat Requirement | Lock-Up Period | Downgrade Penalty | Spend Assets | Funding Methods | Features | Exclusive Merch | Exclusive Club | Additional Features | Apply Link | T&C Link
```

### Step 2: Create Apps Script
1. In your Google Sheet, click **Extensions** → **Apps Script**
2. Delete any existing code
3. Paste this code:

```javascript
function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    const data = JSON.parse(e.postData.contents);
    
    // Create row with timestamp
    const row = [
      new Date(),
      data.contactName || '',
      data.email || '',
      data.telegram || '',
      data.cardName || '',
      data.issuer || '',
      data.website || '',
      data.launchDate || '',
      data.region || '',
      data.supportedRegions || '',
      data.excludedCountries || '',
      data.image || '',
      data.network || '',
      data.type || '',
      data.material || '',
      data.baseCurrency || '',
      data.status || '',
      data.issuanceFee || '',
      data.monthlyFee || '',
      data.fxFee || '',
      data.atmFee || '',
      data.topUpFee || '',
      data.inactivityFee || '',
      data.replacementFee || '',
      data.custodyFee || '',
      data.liquidationFee || '',
      data.freeAtmLimit || '',
      data.dailyLimit || '',
      data.monthlyLimit || '',
      data.minBalance || '',
      data.topUpLimits || '',
      data.baseCashback || '',
      data.maxCashback || '',
      data.boost || '',
      data.rewardCurrency || '',
      data.rewardCap || '',
      data.rebates || '',
      data.stakingYield || '',
      data.welcomeBonus || '',
      data.referralBonus || '',
      data.referralTc || '',
      data.additionalPoints || '',
      data.requiredToken || '',
      data.fiatReq || '',
      data.lockup || '',
      data.downgradePenalty || '',
      data.spendAssets || '',
      data.fundingMethods || '',
      [data.appleGooglePay, data.virtualCard, data.multiVirtual, data.virtualBank, 
       data.esim, data.lounge, data.concierge, data.guests, data.privateJet, data.golf].filter(Boolean).join(', '),
      data.merch || '',
      data.club || '',
      data.additionalFeatures || '',
      data.applyLink || '',
      data.tcLink || ''
    ];
    
    sheet.appendRow(row);
    
    return ContentService.createTextOutput(JSON.stringify({
      status: 'success',
      message: 'Form submitted successfully!'
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      status: 'error',
      message: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}
```

4. Click **Save** (disk icon)

### Step 3: Deploy as Web App
1. Click **Deploy** → **New deployment**
2. Click the gear icon ⚙️ next to "Select type"
3. Choose **Web app**
4. Configure:
   - **Description**: "Form submission handler"
   - **Execute as**: Me (your email)
   - **Who has access**: Anyone
5. Click **Deploy**
6. **Authorize** the script (you may see a warning - click "Advanced" → "Go to [project name]")
7. **Copy the Web App URL** - it will look like:
   ```
   https://script.google.com/macros/s/AKfycby.../exec
   ```

### Step 4: Update the Form
1. Open `src/app/get-listed/page.tsx`
2. Find this line (around line 44):
   ```typescript
   const GOOGLE_SCRIPT_URL = 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE';
   ```
3. Replace `'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE'` with your actual Web App URL:
   ```typescript
   const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycby.../exec';
   ```
4. Save the file

### Step 5: Test
1. Go to http://localhost:3000/get-listed
2. Fill out the form
3. Submit
4. Check your Google Sheet - a new row should appear!

## Features

✅ **Automatic timestamp** - Each submission includes submission date/time
✅ **Success/Error messages** - User gets immediate feedback
✅ **Loading state** - Submit button shows spinner during submission
✅ **Form clearing** - Form resets after successful submission
✅ **Captcha validation** - Prevents spam submissions
✅ **Clear form button** - Users can reset the form anytime

## Troubleshooting

**Form shows success but no data in sheet:**
- Check that you deployed the Apps Script as a Web app
- Verify the URL in the code matches your deployment URL
- Make sure "Who has access" is set to "Anyone"

**Getting errors:**
- Check browser console for error messages
- Verify the Apps Script code is saved and deployed
- Try re-deploying the Apps Script

**Need to update the script:**
1. Make changes in Apps Script editor
2. Click **Deploy** → **Manage deployments**
3. Click the pencil icon to edit
4. Change version to "New version"
5. Click **Deploy**
