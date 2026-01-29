// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Jocall3 from 'jocall3-node';
import { Response } from 'node-fetch';

const client = new Jocall3({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource transactions', () => {
  test('bridgeChain: only required params', async () => {
    const responsePromise = client.web3.transactions.bridgeChain({
      token: 'token',
      amount: 'amount',
      destChain: 'destChain',
      sourceChain: 'sourceChain',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('bridgeChain: required and optional params', async () => {
    const response = await client.web3.transactions.bridgeChain({
      token: 'token',
      amount: 'amount',
      destChain: 'destChain',
      sourceChain: 'sourceChain',
    });
  });

  test('initiate: only required params', async () => {
    const responsePromise = client.web3.transactions.initiate({
      amount: 0,
      asset: 'asset',
      wallet_id: 'wallet_id',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('initiate: required and optional params', async () => {
    const response = await client.web3.transactions.initiate({
      amount: 0,
      asset: 'asset',
      wallet_id: 'wallet_id',
    });
  });

  test('sendCrypto: only required params', async () => {
    const responsePromise = client.web3.transactions.sendCrypto({
      token: 'token',
      amount: 'amount',
      to: 'to',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('sendCrypto: required and optional params', async () => {
    const response = await client.web3.transactions.sendCrypto({
      token: 'token',
      amount: 'amount',
      to: 'to',
    });
  });

  test('swapTokens: only required params', async () => {
    const responsePromise = client.web3.transactions.swapTokens({
      amount: 'amount',
      fromToken: 'fromToken',
      toToken: 'toToken',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('swapTokens: required and optional params', async () => {
    const response = await client.web3.transactions.swapTokens({
      amount: 'amount',
      fromToken: 'fromToken',
      toToken: 'toToken',
    });
  });
});
