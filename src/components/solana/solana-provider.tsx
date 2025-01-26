'use client'

import {WalletAdapterNetwork, WalletError} from '@solana/wallet-adapter-base'
import {ConnectionProvider, WalletProvider,} from '@solana/wallet-adapter-react'
import {WalletModalProvider} from '@solana/wallet-adapter-react-ui'
import dynamic from 'next/dynamic'
import {ReactNode, useCallback, useMemo} from 'react'
import {useCluster} from '../cluster/cluster-data-access'

require('@solana/wallet-adapter-react-ui/styles.css')

export const WalletButton = dynamic(async () => (await import('@solana/wallet-adapter-react-ui')).WalletMultiButton, {
  ssr: false,
})

export function SolanaProvider({ children }: { children: ReactNode }) {
  const { cluster } = useCluster()
  const network = WalletAdapterNetwork.Devnet;
  const endpoint = useMemo(() => cluster.endpoint, [cluster])
  const onError = useCallback((error: WalletError) => {
    console.error(error)
  }, [])

  const wallets = useMemo(
    () => [
      // manually add any legacy wallet adapters here
      // new UnsafeBurnerWalletAdapter(),
    ],
    [network],
  );

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} onError={onError} autoConnect={true}>
        <WalletModalProvider>{children}</WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  )
}

