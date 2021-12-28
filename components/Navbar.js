import Link from 'next/link';
import { Menu, MenuButton, MenuList, MenuItem, IconButton, Flex, Box, Spacer } from '@chakra-ui/react';
import { FcMenu, FcHome, FcAbout } from 'react-icons/fc';
import { BsSearch } from 'react-icons/bs';
import { FiKey } from 'react-icons/fi';

const Navbar = () => {
	return (
		<>
			<Flex p='2' borderBottom='1px' borderColor='gray.100' id='r-menu-wrapper'>
				<Box fontSize='3xl' color='blue.400' fontWeight='bold'>
					<Link href='/' paddingLeft='2'>Realtor</Link>
				</Box>
				<Spacer />
				<Box>
					<Menu id='r-menu' isLazy>
						<MenuButton as={IconButton} icon={<FcMenu />} variant='outline' color='red.400' id='r-menu-btn'/>
						<MenuList id='r-menu-list'>
							<Link href='/' passHref>
								<MenuItem icon={<FcHome />}>Home</MenuItem>
							</Link>
							<Link href='/search' passHref>
								<MenuItem icon={<BsSearch />}>Search</MenuItem>
							</Link>
							<Link href='/search?purpose=for-sale' passHref>
								<MenuItem icon={<FcAbout />}>Sale</MenuItem>
							</Link>
							<Link href='/search?purpose=for-rent' passHref>
								<MenuItem icon={<FiKey />}>Rent</MenuItem>
							</Link>
						</MenuList>
					</Menu>
				</Box>
			</Flex>
		</>
	)
}

export default Navbar