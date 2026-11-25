import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { DottedSeparator } from "@/components/dotted-separator";

export const SignInCard = () => {
	return (
		<Card className="w-full h-full md:w-[487px] border-none shadow-none bg-white">
			<CardHeader className="flex items-center justify-center text-center p-7">
				<CardTitle className="text-2xl">Welcome Back!</CardTitle>
			</CardHeader>
			<div className="px-7 mb-2">
				<DottedSeparator />
			</div>
			<CardContent className="p-7">
				<form className="space-y-4">
					<Input
						required
						type="email"
						value={""}
						onChange={() => {}}
						placeholder="Enter Email Address"
						disabled={false}
					/>
					<Input
						required
						type="password"
						value={""}
						onChange={() => {}}
						placeholder="Enter Password"
						min={8}
						max={256}
						disabled={false}
					/>
					<Button disabled={false} size="lg" className="w-full">
						Log in
					</Button>
				</form>
			</CardContent>
			<div className="px-7">
				<DottedSeparator />
			</div>
			<CardContent className="p-7 flex flex-col gap-y-4">
				<Button
					disabled={false}
					variant="secondary"
					size="lg"
					className="w-fullnpm ">
					<FcGoogle className="mr-2 size-5" />
					Log in with Google
				</Button>
				<Button
					disabled={false}
					variant="secondary"
					size="lg"
					className="w-fullnpm ">
					<FaGithub className="mr-2 size-5" />
					Log in with GitHub
				</Button>
			</CardContent>
		</Card>
	);
};
