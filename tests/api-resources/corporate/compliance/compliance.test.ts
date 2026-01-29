// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Jocall3 from 'jocall3-node';
import { Response } from 'node-fetch';

const client = new Jocall3({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource compliance', () => {
  test('screenAdverseMedia: only required params', async () => {
    const responsePromise = client.corporate.compliance.screenAdverseMedia({ query: 'query' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('screenAdverseMedia: required and optional params', async () => {
    const response = await client.corporate.compliance.screenAdverseMedia({
      query: 'query',
      depth: 'shallow',
    });
  });

  test('screenPep: only required params', async () => {
    const responsePromise = client.corporate.compliance.screenPep({ fullName: 'fullName' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('screenPep: required and optional params', async () => {
    const response = await client.corporate.compliance.screenPep({ fullName: 'fullName', dob: '2019-12-27' });
  });

  test('screenSanctions: only required params', async () => {
    const responsePromise = client.corporate.compliance.screenSanctions({ entities: [{}] });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('screenSanctions: required and optional params', async () => {
    const response = await client.corporate.compliance.screenSanctions({
      entities: [{ country: 'country', name: 'name' }],
      checkType: 'standard',
    });
  });
});
