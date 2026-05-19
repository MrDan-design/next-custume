interface TestimonialCardProps {
  name: string;
  role: string;
  company: string;
  image: string;
  text: string;
  rating: number;
}

export default function TestimonialCard({
  name,
  role,
  company,
  image,
  text,
  rating,
}: TestimonialCardProps) {
  return (
    <div className="bg-white p-8 rounded-lg card-shadow">
      <div className="flex text-yellow-400 mb-4">
        {[...Array(5)].map((_, i) => (
          <span key={i}>{i < rating ? '★' : '☆'}</span>
        ))}
      </div>
      <p className="text-gray-700 mb-6 italic">&quot;{text}&quot;</p>
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full gradient-secondary"></div>
        <div>
          <p className="font-bold text-gray-900">{name}</p>
          <p className="text-sm text-gray-600">{role} at {company}</p>
        </div>
      </div>
    </div>
  );
}
