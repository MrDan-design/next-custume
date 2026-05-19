import Link from 'next/link';

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  link: string;
  price?: string;
  rating?: number;
}

export default function ServiceCard({
  icon,
  title,
  description,
  link,
  price,
  rating,
}: ServiceCardProps) {
  return (
    <div className="bg-white rounded-lg card-shadow hover-lift overflow-hidden">
      <div className="p-6">
        <div className="text-5xl mb-4">{icon}</div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        
        {rating && (
          <div className="flex items-center gap-2 mb-4">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <span key={i}>{i < Math.round(rating) ? '★' : '☆'}</span>
              ))}
            </div>
            <span className="text-sm text-gray-600">({rating}/5)</span>
          </div>
        )}

        <div className="flex items-center justify-between">
          {price && <span className="text-2xl font-bold text-blue-600">{price}</span>}
          <Link href={link} className="btn-primary">
            Learn More →
          </Link>
        </div>
      </div>
    </div>
  );
}
