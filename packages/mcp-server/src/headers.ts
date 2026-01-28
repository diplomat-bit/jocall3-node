// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { IncomingMessage } from 'node:http';
import { ClientOptions } from 'jocall3-node';

export const parseAuthHeaders = (req: IncomingMessage): Partial<ClientOptions> => {
  const geminiAPIKey =
    Array.isArray(req.headers['x-goog-api-key']) ?
      req.headers['x-goog-api-key'][0]
    : req.headers['x-goog-api-key'];
  return { geminiAPIKey };
};
