// components/IconLink.tsx
interface IconLinkProps {
	href: string;
	icon: React.ReactNode;
	label: string;
	className?: string;
}

export default function IconLink({
	href,
	icon,
	label,
	className = '',
}: IconLinkProps) {
	return (
		<a
			href={href}
			target='_blank'
			rel='noopener noreferrer'
			aria-label={label}
			className={`inline-flex items-center gap-2 hover:underline ${className}`}>
			{icon}
			{label}
		</a>
	);
}
