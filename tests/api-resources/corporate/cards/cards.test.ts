// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Jocall3 from 'jocall3-node';
import { Response } from 'node-fetch';

const client = new Jocall3({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource cards', () => {
  test('freeze: only required params', async () => {
    const responsePromise = client.corporate.cards.freeze('cardId', { frozen: true });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('freeze: required and optional params', async () => {
    const response = await client.corporate.cards.freeze('cardId', { frozen: true });
  });

  test('issuePhysical: only required params', async () => {
    const responsePromise = client.corporate.cards.issuePhysical({
      holderName: 'holderName',
      shippingAddress: {},
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('issuePhysical: required and optional params', async () => {
    const response = await client.corporate.cards.issuePhysical({
      holderName: 'holderName',
      shippingAddress: {
        city: 'city',
        country: 'country',
        state: 'state',
        street: 'street',
        zip: 'zip',
      },
    });
  });

  test('issueVirtual: only required params', async () => {
    const responsePromise = client.corporate.cards.issueVirtual({
      holderName: 'holderName',
      monthlyLimit: 0,
      purpose: 'purpose',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('issueVirtual: required and optional params', async () => {
    const response = await client.corporate.cards.issueVirtual({
      holderName: 'holderName',
      monthlyLimit: 0,
      purpose: 'purpose',
      metadata: {},
    });
  });
});
