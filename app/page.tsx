export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4 py-16">
      <div className="max-w-2xl w-full space-y-8">
        {/* Header */}
        <div className="space-y-4">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
            Silas Alderwood
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 font-light">
            Architecting immutable systems. Probably nothing.
          </p>
        </div>

        {/* Work in Progress Notice */}
        <div className="pt-8">
          <p className="text-sm text-gray-500 dark:text-gray-400 italic">
            This is a work in progress portfolio website.
          </p>
        </div>
      </div>
    </main>
  );
}

