// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Jocall3 from 'jocall3-node';
import { Response } from 'node-fetch';

const client = new Jocall3({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource international', () => {
  test('sepa: only required params', async () => {
    const responsePromise = client.payments.international.sepa({ amount: 0, iban: 'iban' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('sepa: required and optional params', async () => {
    const response = await client.payments.international.sepa({ amount: 0, iban: 'iban' });
  });

  test('swift: only required params', async () => {
    const responsePromise = client.payments.international.swift({
      amount: 0,
      bic: 'bic',
      currency: 'currency',
      iban: 'iban',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('swift: required and optional params', async () => {
    const response = await client.payments.international.swift({
      amount: 0,
      bic: 'bic',
      currency: 'currency',
      iban: 'iban',
    });
  });
});
