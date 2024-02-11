"use client";

export default function ClientPage({
  params: { lang },
  dictionary,
}: {
  params: { lang: string };
  dictionary: any;
}) {
  return (
    <main>
      <h1>{dictionary.test}!</h1>
    </main>
  );
}
