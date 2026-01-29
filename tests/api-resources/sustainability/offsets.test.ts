// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Jocall3 from 'jocall3-node';
import { Response } from 'node-fetch';

const client = new Jocall3({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource offsets', () => {
  test('purchase: only required params', async () => {
    const responsePromise = client.sustainability.offsets.purchase({ projectId: 'projectId', tonnes: 0 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('purchase: required and optional params', async () => {
    const response = await client.sustainability.offsets.purchase({
      projectId: 'projectId',
      tonnes: 0,
      paymentSourceId: 'paymentSourceId',
    });
  });

  test('retire: only required params', async () => {
    const responsePromise = client.sustainability.offsets.retire({ certificateId: 'certificateId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retire: required and optional params', async () => {
    const response = await client.sustainability.offsets.retire({ certificateId: 'certificateId' });
  });
});
