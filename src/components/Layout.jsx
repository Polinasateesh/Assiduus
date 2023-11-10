import React from 'react'
import {
    Box,
    Flex,
    Card
} from '@chakra-ui/react'

import CheckingAccount from './CheckingAccount';
import Invoice from './Invoice';
import CashFlow from './CashFlow';
import AccountWatchlist from './AccountWatchlist';

const Layout = () => {
    return (
        <Box ml={{ base: 0, md: 60 }} p="4">
            <Flex alignItems="center" justifyContent="space-between" flexWrap="wrap">
                <Card style={{ height: '280px', width: '485px', marginBottom: '10px' }}>
                    <CheckingAccount />
                </Card>
                <Card style={{ height: '280px', width: '485px', marginBottom: '10px' }}>
                    <Invoice />
                </Card>
                <Card style={{ height: '280px', width: '485px', marginBottom: '10px' }}>
                    <CashFlow />
                </Card>
                <Card style={{ height: '280px', width: '485px', marginBottom: '10px' }}>
                    <AccountWatchlist />
                </Card>
            </Flex>
        </Box>
    )
}

export default Layout
