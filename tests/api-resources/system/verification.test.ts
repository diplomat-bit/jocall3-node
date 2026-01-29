// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Jocall3, { toFile } from 'jocall3-node';
import { Response } from 'node-fetch';

const client = new Jocall3({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource verification', () => {
  test('compareBiometrics: only required params', async () => {
    const responsePromise = client.system.verification.compareBiometrics({
      sample_a: 'sample_a',
      sample_b: 'sample_b',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('compareBiometrics: required and optional params', async () => {
    const response = await client.system.verification.compareBiometrics({
      sample_a: 'sample_a',
      sample_b: 'sample_b',
    });
  });

  test('verifyDocument: only required params', async () => {
    const responsePromise = client.system.verification.verifyDocument({
      file: await toFile(Buffer.from('# my file contents'), 'README.md'),
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('verifyDocument: required and optional params', async () => {
    const response = await client.system.verification.verifyDocument({
      file: await toFile(Buffer.from('# my file contents'), 'README.md'),
      type: 'type',
    });
  });
});
