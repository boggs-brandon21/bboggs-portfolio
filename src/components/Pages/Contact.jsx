import { useState, useRef } from 'react';
import { RevealOnScroll } from '../RevealOnScroll';
import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';
import { styles } from '../../styles';
import { slideIn } from '../../utils/motion';

const InputField = ({ label, value, onChange, placeholder, name, type }) => (
	<label className="flex flex-col">
		<span className="text-white font-medium mb-4">{label}</span>
		<input
			type={type}
			name={name}
			value={value}
			onChange={onChange}
			placeholder={placeholder}
			className="bg-gray-200 py-4 px-6 placeholder:text-secondary text-black rounded-lg outline-none border-none font-medium"
		/>
	</label>
);

export const Contact = () => {
	const formRef = useRef();
	const [form, setForm] = useState({
		name: '',
		email: '',
		message: '',
	});
	const [loading, setLoading] = useState(false);
	const [emailError, setEmailError] = useState('');
	const [nameError, setNameError] = useState('');
	const [confirmation, setConfirmation] = useState('');

	const handleChange = (e) => {
		const { name, value } = e.target;
		setForm({
			...form,
			[name]: value,
		});
	};

	const validateEmail = (email) => {
		const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
		return regex.test(email);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setEmailError('');
		setNameError('');
		setConfirmation('');

		if (!validateEmail(form.email)) {
			setEmailError('Please enter a valid email address.');
			return;
		}

		if (!form.name.trim()) {
			setNameError('Name is required.');
			return;
		}

		setLoading(true);

		emailjs
			.send(
				import.meta.env.VITE_SERVICE_ID,
				import.meta.env.VITE_TEMPLATE_ID,
				{
					from_name: form.name,
					to_name: 'Brandon Boggs',
					from_email: form.email,
					to_email: 'bboggs2121@gmail.com',
					message: form.message,
				},
				import.meta.env.VITE_PUBLIC_KEY
			)
			.then(() => {
				setLoading(false);
				setConfirmation(
					'Thank you! I will get back to you as soon as possible.'
				);

				setForm({
					name: '',
					email: '',
					message: '',
				});
			})
			.catch((error) => {
				setLoading(false);
				console.error(error);
				setConfirmation('Something went wrong. Please try again. :/');
			});
	};

	return (
		<section
			id="contact"
			className="min-h-screen flex items-center justify-center py-20"
		>
			<div className="w-full px-4 max-w-3xl mx-auto mt-12">
				<motion.div
					variants={slideIn('left', 'tween', 0.2, 1)}
					className="bg-black/90 p-8 rounded-2xl shadow-2xl w-full"
				>
					<h3 className={styles.sectionHeadText}>Contact Me</h3>

					<form
						ref={formRef}
						onSubmit={handleSubmit}
						className="mt-12 flex flex-col gap-8"
					>
						<InputField
							label="Your Name"
							name="name"
							value={form.name}
							onChange={handleChange}
							placeholder="Insert your name here..."
							type="text"
						/>
						{nameError && (
							<span className="text-red-500">{nameError}</span>
						)}

						<InputField
							label="Email Address"
							name="email"
							value={form.email}
							onChange={handleChange}
							placeholder="What's your email address?"
							type="email"
						/>
						{emailError && (
							<span className="text-red-500">{emailError}</span>
						)}

						<InputField
							label="Your Message"
							name="message"
							value={form.message}
							onChange={handleChange}
							placeholder="Enter your message here..."
							type="text"
						/>

						<button
							type="submit"
							className="bg-green-500 mx-auto py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
						>
							{loading ? 'Sending...' : 'Send'}
						</button>
						{confirmation && (
							<p className="text-green-500">{confirmation}</p>
						)}
					</form>
				</motion.div>
			</div>
		</section>
	);
};
