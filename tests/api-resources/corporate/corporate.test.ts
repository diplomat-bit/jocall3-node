// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Jocall3 from 'jocall3-node';
import { Response } from 'node-fetch';

const client = new Jocall3({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource corporate', () => {
  test('onboardEntity: only required params', async () => {
    const responsePromise = client.corporate.onboardEntity({
      entityType: 'LLC',
      jurisdiction: 'DE',
      legalName: 'legalName',
      taxId: 'taxId',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('onboardEntity: required and optional params', async () => {
    const response = await client.corporate.onboardEntity({
      entityType: 'LLC',
      jurisdiction: 'DE',
      legalName: 'legalName',
      taxId: 'taxId',
      beneficialOwners: [
        {
          id: 'id',
          email: 'dev@stainless.com',
          identityVerified: true,
          name: 'name',
          address: {
            city: 'city',
            country: 'country',
            state: 'state',
            street: 'street',
            zip: 'zip',
          },
          phone: 'phone',
          preferences: {
            notificationChannels: {},
            theme: 'theme',
          },
          securityStatus: { lastLogin: '2019-12-27T18:11:19.117Z', twoFactorEnabled: true },
        },
      ],
    });
  });
});
