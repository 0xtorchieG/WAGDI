import { Container, Heading, ListItem, UnorderedList } from "@chakra-ui/react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Link from "next/link";

export default function Home() {
	return (
		<Container paddingY="10">
			<ConnectButton />

			{/* Feel free to delete this Info section before getting started */}
			<Link href="/waitingroom"> start </Link>
			<Info />
		</Container>
	);
}

// Feel free to delete this before getting started
const Info = () => {
	return (
		<>
			<Heading mt="10">gm ☀️</Heading>

			<UnorderedList mt="4">
				<ListItem>
					<Link isExternal={true} href="https://nextjs.org/">
						🔼 Next.js
					</Link>
				</ListItem>
				<ListItem>
					<Link isExternal={true} href="https://chakra-ui.com/">
						☸️ Chakra UI
					</Link>
				</ListItem>
				<ListItem>
					<Link isExternal={true} href="https://rainbowkit.com">
						🌈 Rainbowkit
					</Link>
				</ListItem>
				<ListItem>
					<Link isExternal={true} href="https://wagmi.sh">
						❤️‍🔥 wagmi
					</Link>
				</ListItem>
				<ListItem>
					<Link
						isExternal={true}
						href="https://www.ankr.com/protocol/"
					>
						⚓️ Ankr RPC
					</Link>
				</ListItem>
			</UnorderedList>
		</>
	);
};
