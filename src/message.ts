import { ResponseStatus } from '@/index'
import type {
	ClientErrorResponse,
	InformationResponse,
	RedirectionResponse,
	ServerErrorResponse,
	SuccessResponse,
} from '@/index'

export const information: Record<InformationResponse, string> = {
	[ ResponseStatus.Continue ]: 'The client should continue the request or ignore the response if the request is already finished.',
	[ ResponseStatus.SwitchingProtocols ]: 'The server is switching to the Upgraded protocol.',
	[ ResponseStatus.Processing ]: 'Processing the request, no response is available yet.',
	[ ResponseStatus.EarlyHints ]: 'Start preloading resources while the server prepares a response.',
}


export const success: Record<SuccessResponse, string> = {
	[ ResponseStatus.Ok ]: 'Ok',
	[ ResponseStatus.Created ]: 'The request succeeded, and a new resource was created as a result.',
	[ ResponseStatus.Accepted ]: 'The request has been received but not yet acted upon.',
	[ ResponseStatus.NonAuthoritative ]: 'The returned metadata is not exactly the same as is available from the origin server, but is collected from a local or a third-party copy.',
	[ ResponseStatus.NoContent ]: 'There is no content to send for this request, but the headers may be useful.',
	[ ResponseStatus.ResetContent ]: 'Reset the document which sent this request.',
	[ ResponseStatus.PartialsContent ]: 'The Range header is sent from the client to request only part of a resource.',
	[ ResponseStatus.MultiStatus ]: 'Conveys information about multiple resources, for situations where multiple status codes might be appropriate.',
	[ ResponseStatus.AlreadyReported ]: 'Avoid repeatedly enumerating the internal members of multiple bindings to the same collection.',
	[ ResponseStatus.ImUsed ]: 'The server has fulfilled a GET request for the resource, and the response is a representation of the result of one or more instance-manipulations applied to the current instance.',
}

export const redirection: Record<RedirectionResponse, string> = {
	[ ResponseStatus.MultipleChoices ]: 'The request has more than one possible response. The user agent or user should choose one of them.',
	[ ResponseStatus.MovedPermanently ]: 'The URL of the requested resource has been changed permanently. The new URL is given in the response.',
	[ ResponseStatus.Found ]: 'The URI of requested resource has been changed temporarily. Further changes in the URI might be made in the future. Therefore, this same URI should be used by the client in future requests.',
	[ ResponseStatus.SeeOther ]: 'Direct the client to get the requested resource at another URI with a GET request.',
	[ ResponseStatus.NotModified ]: 'The response has not been modified, so the client can continue to use the same cached version of the response.',
	[ ResponseStatus.TemporaryRedirect ]: 'Get the requested resource at another URI with same method that was used in the prior request.',
	[ ResponseStatus.PermanentRedirect ]: 'The resource is now permanently located at another URI, specified by the Location: HTTP Response header.',
}


export const clientError: Record<ClientErrorResponse, string> = {
	[ ResponseStatus.BadRequest ]: 'Cannot process the request due to something that is perceived to be a client error.',
	[ ResponseStatus.Unauthorized ]: 'You must be authenticated to get the requested response.',
	[ ResponseStatus.PaymentRequired ]: 'Payment required to access this content.',
	[ ResponseStatus.Forbidden ]: 'You do not have access rights to the content.',
	[ ResponseStatus.NotFound ]: 'The server can not find the requested resource.',
	[ ResponseStatus.MethodNotAllowed ]: 'HTTP method not supported by the target resource.',
	[ ResponseStatus.NotAcceptable ]: 'Cannot find, after performing server-driven content negotiation, any content that conforms to the criteria given by the user agent.',
	[ ResponseStatus.ProxyAuthenticationRequired ]: 'Authentication is needed to be done by a proxy.',
	[ ResponseStatus.RequestTimeout ]: 'The server would like to shut down this unused connection.',
	[ ResponseStatus.Conflict ]: 'The request conflicts with the current state of the server.',
	[ ResponseStatus.Gone ]: 'The requested content has been permanently deleted from server',
	[ ResponseStatus.LengthRequired ]: 'Server rejected the request because the Content-Length header field is not defined and the server requires it.',
	[ ResponseStatus.PreconditionFailed ]: 'The client has indicated preconditions in its headers which the server does not meet.',
	[ ResponseStatus.PayloadTooLarge ]: 'Request entity is larger than limits defined by server. The server might close the connection or return an Retry-After header field.',
	[ ResponseStatus.UriTooLong ]: 'The URI requested by the client is longer than the server is willing to interpret.',
	[ ResponseStatus.UnsupportedMediaType ]: 'The media format of the requested data is not supported by the server. Rejecting the request.',
	[ ResponseStatus.RangeNotSatisfiable ]: 'The range specified by the Range header field in the request cannot be fulfilled.',
	[ ResponseStatus.ExpectationFailed ]: 'The expectation indicated by the Expect request header field cannot be met by the server.',
	[ ResponseStatus.ImTeapot ]: 'The server refuses the attempt to brew coffee with a teapot.',
	[ ResponseStatus.MisdirectedRequest ]: 'The request was directed at a server that is not able to produce a response.',
	[ ResponseStatus.UnprocessableEntity ]: 'The request was well-formed but was unable to be followed due to semantic errors.',
	[ ResponseStatus.Locked ]: 'The resource that is being accessed is locked.',
	[ ResponseStatus.FailedDependency ]: 'The request failed due to failure of a previous request.',
	[ ResponseStatus.TooEarly ]: 'The server is unwilling to risk processing a request that might be replayed.',
	[ ResponseStatus.UpgradeRequired ]: 'The server refuses to perform the request using the current protocol but might be willing to do so after the client upgrades to a different protocol.',
	[ ResponseStatus.PreconditionRequired ]: 'The origin server requires the request to be conditional.',
	[ ResponseStatus.TooManyRequests ]: 'Too many requests in a given amount of time.',
	[ ResponseStatus.RequestHeaderFieldsTooLarge ]: 'The server is unwilling to process the request because its header fields are too large.',
	[ ResponseStatus.UnavailableForLegalReasons ]: 'The user agent requested a resource that cannot legally be provided.',
}


export const serverError: Record<ServerErrorResponse, string> = {
	[ ResponseStatus.InternalServerError ]: 'There has been an error on the server.',
	[ ResponseStatus.NotImplemented ]: 'The request method is not supported by the server and cannot be handled.',
	[ ResponseStatus.BadGateway ]: 'The server, while working as a gateway to get a response needed to handle the request, got an invalid response.',
	[ ResponseStatus.ServiceUnavailable ]: 'The server is not ready to handle the request.',
	[ ResponseStatus.GatewayTimeout ]: 'The server is acting as a gateway and cannot get a response in time.',
	[ ResponseStatus.HTTPVersionNotSupported ]: 'The HTTP version used in the request is not supported by the server.',
	[ ResponseStatus.VariantAlsoNegotiates ]: 'The chosen variant resource is configured to engage in transparent content negotiation itself, and is therefore not a proper end point in the negotiation process.',
	[ ResponseStatus.InsufficientStorage ]: 'The method could not be performed on the resource because the server is unable to store the representation needed to successfully complete the request.',
	[ ResponseStatus.LoopDetected ]: 'Infinite loop detected while processing the request.',
	[ ResponseStatus.NotExtended ]: 'Further extensions to the request are required for the server to fulfill it.',
	[ ResponseStatus.NetworkAuthenticationRequired ]: 'The client needs to authenticate to gain network access.',
}


const message = {
	...information,
	...success,
	...redirection,
	...clientError,
	...serverError,
}

export default message