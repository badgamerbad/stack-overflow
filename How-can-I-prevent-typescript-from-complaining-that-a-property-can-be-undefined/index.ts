import { Request, Response } from 'express';

interface IUserRequestData {
  id: number;
  firstName: string;
  lastName: string;
  company: {
    id: number;
    name: string;
  };
}

interface IAuthenticatedHeaders {
  authorization: string;
  [x: string]: any;
}

interface IMyRequest extends Request {
  user?: IUserRequestData;
  correlationId?: any;
}

interface IMyAuthenticatedRequest extends IMyRequest {
  user: IUserRequestData;
  headers: IAuthenticatedHeaders;
}

interface IAuthenticationResult {
  req: IMyAuthenticatedRequest;
  res: Response;
  user: IUserRequestData;
  authenticated: boolean;
  authorization: string;
}

export function authenticate(req: IMyRequest, res: Response): IAuthenticationResult {
  /**
   * Check the authorization information on the request object and return it.
   *
   * @param args
   */

  if (!req.user || !req.headers || !req.headers.authorization) {
    throw new Error('Authentication error');
  }

  const { authorization } = req.headers;

  return { req, res, authorization, user: req.user, authenticated: true };
}