// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Jocall3 from 'jocall3-node';
import { Response } from 'node-fetch';

const client = new Jocall3({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource lending', () => {
  test('getStatus', async () => {
    const responsePromise = client.lending.getStatus('appId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('getStatus: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.lending.getStatus('appId', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      Jocall3.NotFoundError,
    );
  });

  test('submitApplication: only required params', async () => {
    const responsePromise = client.lending.submitApplication({
      amount: 0,
      employmentData: { employer: 'employer', monthlyIncome: 0 },
      loanType: 'MORTGAGE',
      termMonths: 0,
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('submitApplication: required and optional params', async () => {
    const response = await client.lending.submitApplication({
      amount: 0,
      employmentData: {
        employer: 'employer',
        monthlyIncome: 0,
        tenureMonths: 0,
      },
      loanType: 'MORTGAGE',
      termMonths: 0,
      assets: [{}],
      collateralId: 'collateralId',
      liabilities: [{}],
    });
  });
});
