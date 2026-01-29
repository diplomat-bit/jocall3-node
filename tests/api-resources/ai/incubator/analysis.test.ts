// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Jocall3 from 'jocall3-node';
import { Response } from 'node-fetch';

const client = new Jocall3({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource analysis', () => {
  test('competitorScan: only required params', async () => {
    const responsePromise = client.ai.incubator.analysis.competitorScan({
      industry: 'industry',
      niche: 'niche',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('competitorScan: required and optional params', async () => {
    const response = await client.ai.incubator.analysis.competitorScan({
      industry: 'industry',
      niche: 'niche',
    });
  });

  test('swot: only required params', async () => {
    const responsePromise = client.ai.incubator.analysis.swot({ businessContext: 'businessContext' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('swot: required and optional params', async () => {
    const response = await client.ai.incubator.analysis.swot({ businessContext: 'businessContext' });
  });
});
