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
									// minify: true,
									// namespace: 'NAMESPACE_HERE',
									// fileName: true,
									// displayName: true,
									meaninglessFileNames: [
										'index',
										'styles',
										'styled',
									],
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
