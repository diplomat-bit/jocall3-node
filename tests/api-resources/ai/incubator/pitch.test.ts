// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Jocall3 from 'jocall3-node';
import { Response } from 'node-fetch';

const client = new Jocall3({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource pitch', () => {
  // Prism tests are disabled
  test.skip('retrieveDetails', async () => {
    const responsePromise = client.ai.incubator.pitch.retrieveDetails('pitch_qw_synergychain-xyz');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieveDetails: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.ai.incubator.pitch.retrieveDetails('pitch_qw_synergychain-xyz', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(Jocall3.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('submitFeedback', async () => {
    const responsePromise = client.ai.incubator.pitch.submitFeedback('pitch_qw_synergychain-xyz');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('submitFeedback: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.ai.incubator.pitch.submitFeedback(
        'pitch_qw_synergychain-xyz',
        {},
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Jocall3.NotFoundError);
  });
});
