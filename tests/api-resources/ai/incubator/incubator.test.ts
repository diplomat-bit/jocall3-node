// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Jocall3 from 'jocall3-node';
import { Response } from 'node-fetch';

const client = new Jocall3({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource incubator', () => {
  // Prism tests are disabled
  test.skip('generatePitch: only required params', async () => {
    const responsePromise = client.ai.incubator.generatePitch({
      financialProjections: {
        seedRoundAmount: 2500000,
        valuationPreMoney: 10000000,
        projectionYears: 3,
        revenueForecast: [500000, 2000000, 6000000],
        profitabilityEstimate: 'Achieve profitability within 18 months.',
      },
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('generatePitch: required and optional params', async () => {
    const response = await client.ai.incubator.generatePitch({
      financialProjections: {
        seedRoundAmount: 2500000,
        valuationPreMoney: 10000000,
        projectionYears: 3,
        revenueForecast: [500000, 2000000, 6000000],
        profitabilityEstimate: 'Achieve profitability within 18 months.',
      },
    });
  });

  // Prism tests are disabled
  test.skip('listPitches', async () => {
    const responsePromise = client.ai.incubator.listPitches();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('listPitches: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.ai.incubator.listPitches({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Jocall3.NotFoundError,
    );
  });

  // Prism tests are disabled
  test.skip('listPitches: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.ai.incubator.listPitches(
        {
          limit: 0,
          offset: 0,
          status: 'status',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Jocall3.NotFoundError);
  });
});
