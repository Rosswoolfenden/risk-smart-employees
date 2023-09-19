import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ApolloClient, ApolloProvider, NormalizedCacheObject } from '@apollo/client'
import { initClient } from './graphql/index.ts'


const run =  async () => { 

	const apolloClient: ApolloClient<NormalizedCacheObject> = initClient();
	ReactDOM.createRoot(document.getElementById('root')!).render(
		<React.StrictMode>
			<ApolloProvider client={apolloClient}>
				<App />
			</ApolloProvider>
		</React.StrictMode>,
	)
}

run();
