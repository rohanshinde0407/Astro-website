import React from 'react';

interface CardProps {
  title: string;
  description: string;
  icon?: string;
  link?: string;
  onClick?: () => void;
}

export default function Card({ title, description, icon, link, onClick }: CardProps) {
  const CardContent = () => (
    <>
      {icon && <div className="card-icon">{icon}</div>}
      <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>{title}</h3>
      <p style={{ fontSize: '0.95rem', margin: 0, flexGrow: 1 }}>{description}</p>
    </>
  );

  if (link) {
    return (
      <a href={link} className="card-interactive">
        <CardContent />
      </a>
    );
  }

  return (
    <div className="card-interactive" onClick={onClick}>
      <CardContent />
    </div>
  );
}
