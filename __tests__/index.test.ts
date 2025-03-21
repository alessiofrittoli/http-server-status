import { ResponseStatus } from '@/index'

describe( 'ResponseStatus', () => {
	it( 'has most used Response Status codes', () => {
		expect( ResponseStatus.Continue )
			.toBe( 100 )

		expect( ResponseStatus.Ok )
			.toBe( 200 )
		expect( ResponseStatus.NoContent )
			.toBe( 204 )

		expect( ResponseStatus.MovedPermanently )
			.toBe( 301 )
		expect( ResponseStatus.PermanentRedirect )
			.toBe( 308 )

		expect( ResponseStatus.Unauthorized )
			.toBe( 401 )
		expect( ResponseStatus.Forbidden )
			.toBe( 403 )
		expect( ResponseStatus.NotFound )
			.toBe( 404 )
		expect( ResponseStatus.UnprocessableEntity )
			.toBe( 422 )
	} )
} )