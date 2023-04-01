import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum'
import { Web3Modal } from '@web3modal/react'
import { configureChains, createClient, WagmiConfig } from 'wagmi'
import { arbitrum, mainnet, polygon, sepolia } from 'wagmi/chains'
import { useAccount, useContract, useSigner } from 'wagmi'
import HomePage from "./pages/HomePage";
import Balance from "./Balance";
import Header from "./components/Header";
import {BrowserRouter} from "react-router-dom";
import Router from "./components/Router";

const chains = [sepolia, arbitrum, mainnet, polygon]
const projectId = 'c51faa51784ad403984b13fe61984cdd'

const { provider } = configureChains(chains, [w3mProvider({ projectId })])
const wagmiClient = createClient({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, version: 1, chains }),
  provider
})
const ethereumClient = new EthereumClient(wagmiClient, chains)

export default function App() {
  return (
        <WagmiConfig client={wagmiClient}>
            <BrowserRouter>
            <Header/><Router/>
            {/*<HomePage/>*/}
            {/*<Balance/>*/}
            <Web3Modal
                themeVariables={{
                    '--w3m-font-family': 'Roboto, sans-serif',
                    '--w3m-accent-color': 'white',
                    "--w3m-accent-fill-color": "black"
                }}
                projectId={projectId} ethereumClient={ethereumClient} />
            </BrowserRouter>
        </WagmiConfig>
  )
}