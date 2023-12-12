import React, { useEffect, useState } from "react"
import Web3 from "web3"
import ERC721Contract from "../../backend/build/contracts/ERC721.json"
import { ERC721 } from "../../backend/types/web3-v1-contracts/ERC721"
import { AbiItem } from "web3-utils"
// eslint-disable-next-line @typescript-eslint/no-var-requires
const logo = require("../public/logo192.png") as string

import "./App.css"

function App() {
    const [nftName, setNFTName] = useState((null as unknown as string) || null)
    const [nftSymbol, setNFTSymbol] = useState(
        (null as unknown as string) || null
    )
    const [networkId, setNetworkId] = useState(
        (null as unknown as number) || null
    )
    const [accounts, setAccounts] = useState(
        (null as unknown as Array<string>) || null
    )

    useEffect(() => {
        const Web3Init = async () => {
            if (window.ethereum) {
                const web3 = new Web3(window.ethereum)
                await window.ethereum.request({ method: "eth_requestAccounts" })
                const accounts = await web3.eth.getAccounts()
                const networkId = await web3.eth.net.getId()
                const deployedNetwork = (ERC721Contract.networks as any)[
                    networkId
                ]

                const contractInstance = new web3.eth.Contract(
                    ERC721Contract.abi as AbiItem[],
                    deployedNetwork?.address as string
                ) as unknown as ERC721

                let response = await contractInstance.methods.name().call()
                setNFTName(response)
                response = await contractInstance.methods.symbol().call()
                setNFTSymbol(response)
                setNetworkId(networkId)
                setAccounts(accounts)
            }
        }
        Web3Init().catch(console.log)
    }, [accounts])
    return (
        <>
            {nftName && <div> NFT name: {nftName} </div>}
            {nftSymbol && <div> NFT symbol: {nftSymbol} </div>}
            {nftSymbol && <div> NetworkId: {networkId} </div>}
            {accounts && <div> Accounts: {accounts} </div>}
            {}
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        Edit <code>src/App.tsx</code> and save to reload.
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                </header>
            </div>
        </>
    )
}

export default App
