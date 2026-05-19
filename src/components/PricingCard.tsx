import Link from 'next/link';

interface PricingCardProps {
  name: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  link: string;
}

export default function PricingCard({
  name,
  price,
  description,
  features,
  isPopular,
  link,
}: PricingCardProps) {
  return (
    <div className={`rounded-lg p-8 ${isPopular ? 'gradient-primary text-white card-shadow' : 'bg-white card-shadow'}`}>
      {isPopular && (
        <div className="bg-yellow-300 text-gray-900 px-3 py-1 rounded-full text-sm font-bold inline-block mb-4">
          Most Popular
        </div>
      )}
      <h3 className="text-2xl font-bold mb-2">{name}</h3>
      <p className={isPopular ? 'text-blue-100 mb-6' : 'text-gray-600 mb-6'}>{description}</p>
      
      <div className="mb-6">
        <span className="text-4xl font-bold">{price}</span>
        <span className={isPopular ? 'text-blue-100 ml-2' : 'text-gray-600 ml-2'}>/month</span>
      </div>

      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-3">
            <span className="text-lg">✓</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <Link
        href={link}
        className={`block text-center font-semibold py-3 px-6 rounded-lg transition-all ${
          isPopular
            ? 'bg-white text-blue-600 hover:bg-blue-50'
            : 'bg-blue-600 text-white hover:bg-blue-700'
        }`}
      >
        Get Started
      </Link>
    </div>
  );
}
