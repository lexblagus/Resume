import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(
	{
		plugins: [
			react(
				{
					babel: {
						plugins: [
							[
								'babel-plugin-styled-components',
								{
									pure: true,
									minify: false,
									// namespace: 'NAMESPACE_HERE',
									fileName: true, // displayName handles this
									displayName: true,
									meaninglessFileNames: [
										'index',
										'styles',
										'styled',
									],
									// namespace: 'prefix--',
									ssr: true,
								},
							],
						],
					},
				},
			),
		],
		server: {
			port: 8090,
		},
	}
);
