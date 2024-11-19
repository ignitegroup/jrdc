import React from 'react';
import { BookOpen } from 'lucide-react';

interface DriverReferencesProps {
  references: string[];
}

export function DriverReferences({ references }: DriverReferencesProps) {
  return (
    <div className="mt-6 border-t border-gray-200 pt-6">
      <h4 className="text-lg font-semibold mb-2 flex items-center">
        <BookOpen className="h-5 w-5 text-red-600 mr-2" />
        References
      </h4>
      <ul className="list-disc list-inside text-gray-600 space-y-1">
        {references.map((reference, index) => (
          <li key={index}>{reference}</li>
        ))}
      </ul>
    </div>
  );
}