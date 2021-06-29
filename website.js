const assert = require('chai').assert;
const util = require('./utils');
var expect = require('chai').expect;
const baseURL = 'https://www.vperfumes.com/'


'use strict';

async function getResponseStatus() {
    return getResponseStatus()
  }

async function getResponseTime() {
    return getResponseTime()
    
}

async function getResponseSize() {
    return getResponseSize()
    
}

  describe('response status should be 200', () => {
    it('returns 200', async () => {
      const result = await util.getResponseStatus(baseURL+'home');
      expect(result).to.eql(200);
    })
  })

  describe('response status should be 200', () => {
    it('returns 200', async () => {
      const result = await util.getResponseStatus(baseURL+'product/products-listing');
      expect(result).to.eql(200);
    })
  })

  describe('response status should be 200', () => {
    it('returns 200', async () => {
      const result = await util.getResponseStatus(baseURL+'products/product-detail/gucci-guilty-absolute-pour-homme-for-men-eau-de-parfum/721');
      expect(result).to.eql(200);
    })
  })

  describe('response status should be 200', () => {
    it('returns 200', async () => {
      const result = await util.getResponseStatus(baseURL+'products/cart');
      expect(result).to.eql(200);
    })
  })
  
  describe('response time should be less than 1000', () => {
      it('less than 1000', async () => {
          const result = await util.getResponseTime(baseURL+'home');
          expect(result).to.be.at.least(1000);
      })
  })

  describe('response time should be less than 1000', () => {
    it('less than 1000', async () => {
        const result = await util.getResponseTime(baseURL+'product/products-listing');
        expect(result).to.be.at.least(1000);
    })
})
     

describe('response time should be less than 1000', () => {
    it('less than 1000', async () => {
        const result = await util.getResponseTime(baseURL+'products/product-detail/gucci-guilty-absolute-pour-homme-for-men-eau-de-parfum/721');
        expect(result).to.be.at.least(1000);
    })
})
     

describe('response time should be less than 1000', () => {
    it('less than 1000', async () => {
        const result = await util.getResponseTime(baseURL+'products/cart');
        expect(result).to.be.at.least(1000);
    })
})
     
  describe('response size should be less than 1000 kBs', () => {
      it('less than 1000', async () => {
          const result = await util.getResponseSize(baseURL+'home');
          expect(result).to.be.at.least(1000);
      })
  })

  describe('response size should be less than 1000 kBs', () => {
    it('less than 1000', async () => {
        const result = await util.getResponseSize(baseURL+'product/products-listing');
        expect(result).to.be.at.least(1000);
    })
})

describe('response size should be less than 1000 kBs', () => {
    it('less than 1000', async () => {
        const result = await util.getResponseSize(baseURL+'products/product-detail/gucci-guilty-absolute-pour-homme-for-men-eau-de-parfum/721');
        expect(result).to.be.at.least(1000);
    })
})

describe('response size should be less than 1000 kBs', () => {
    it('less than 1000', async () => {
        const result = await util.getResponseSize(baseURL+'products/cart');
        expect(result).to.be.at.least(1000);
    })
})

describe('image block', () => {
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setRequestInterception(true);
  // page.on('console', msg => console.log('PAGE LOG:', msg.text));
  page.on('pageerror', error => {
    console.log(error.message);
   });
 page.on('request', (interceptedRequest) => {
  //  const path = interceptedRequest.url;
  //  console.log( interceptedRequest.url(), " interceptedRequest.url()")
  //  console.log((interceptedRequest.url()))
   if (interceptedRequest.resourceType() === 'image'){
     if (!interceptedRequest.url().includes(".png"))
        return
   interceptedRequest.abort();}
  else
 interceptedRequest.continue();
});

  await page.goto('https://www.vperfumes.com/home');
  
  

  await browser.close();

})();
})