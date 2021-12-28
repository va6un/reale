import Link from 'next/link'
import Image from 'next/image'

// charkra UI
import { Flex, Box, Text, Button } from '@chakra-ui/react'

// utils
import { baseUrl, fetchApi} from '../utils/fetchApi'

// component
import Property from '../components/Property'

const Banner = ({purpose, title1, title2, desc1, desc2, linkName, buttonText, imageUrl}) => {
	return (
		<Flex m='10' flexWrap='wrap' justifyContent='center' alignItems='center'>
			<Image src={imageUrl} width={500} height={300} alt='banner' />
			<Box p='5'>
				<Text color='gray.500' fontStyle='sm' fontWeight='medium'>
					{purpose}
				</Text>
				<Text fontStyle='3xl' fontWeight='bold'>
					{title1}<br/>{title2}
				</Text>
				<Text fontStyle='lg' paddingTop='3' paddingBottom='3' color='gray.700'>
					{desc1}<br /> {desc2}
				</Text>
				<Button fontSize='xl'>
					<Link href={linkName}>{buttonText}</Link>
				</Button>
			</Box>
		</Flex>
	)
}
export default function Home({propertyForSale, propertyForRent}) {

  return (
	<Box m='auto'>
		<Banner
			purpose='RENT A HOME'
			title1='Rental Homes for'
			title2='Everyone'
			desc1='Explore Apartments, Villas, Homes'
			desc2='and more'
			buttonText='Explore Renting'
			linkName='/search?purpose=for-rent'
			imageUrl='https://bayut-production.s3.eu-central-1.amazonaws.com/image/110798997/d9446cee36ba4f839c8fedd0e0b52208'
		/>
		<Flex flexWrap='wrap' justifyContent='space-evenly'>
			{propertyForRent.map(property => <Property key={property.id} property={property} />)}
		</Flex>
		<Banner
			purpose='BUY A HOME'
			title1='Fing, Buy & Own Your'
			title2='Dream Home'
			desc1='Explore Apartments, Villas, Homes'
			desc2='and more'
			buttonText='Explore Buying'
			linkName='/search?purpose=for-sale'
			imageUrl='https://bayut-production.s3.eu-central-1.amazonaws.com/image/110799002/8ab6592e4ea7409fb05af756b7b80a03'
		/>
		<Flex flexWrap='wrap' justifyContent='space-evenly'>
			{propertyForSale.map(property => <Property key={property.id} property={property} />)}
		</Flex>
	</Box>
  )
}

export async function getStaticProps(){
	const propertyForSale = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`)
	const propertyForRent = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`)

	return {
		props: {
			propertyForSale: propertyForSale?.hits,
			propertyForRent: propertyForRent?.hits
		}
	}
}
