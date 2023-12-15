/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import type { ServiceSchema } from "moleculer";

/*interface TestSettings {
	defaultName: string;
	cache: {
		enabled: boolean;
		ttl: number;

		// include headers in cache key calculation. Default: false
		headers: boolean;
	};
}*/

const service: ServiceSchema = {
	name: "test",

	settings: {
		defaultName: "Moleculer",
		cache: {
			enabled: true,
			ttl: 5, // ttl in seconds
			headers: true,
		},
	},

	dependencies: [],

	actions: {
		add(ctx) {
			return Number(ctx.params.a) + Number(ctx.params.b);
		},

		sub(ctx) {
			return Number(ctx.params.a) - Number(ctx.params.b);
		},

		mult: {
			params: {
				a: { type: "number" },
				b: { type: "number" },
			},
			handler(ctx) {
				return Number(ctx.params.a) * Number(ctx.params.b);
			},
		},

		div(ctx) {
			const a = Number(ctx.params.a);
			const b = Number(ctx.params.b);
			if (b != 0) return a / b;
			else throw new Error("Divide by zero!");
		},
	},

	/**
	 * Events
	 */
	events: {},

	/**
	 * Methods
	 */
	methods: {},
};

export default service;
