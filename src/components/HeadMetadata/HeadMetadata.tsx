import Head from "next/head";

export default function HeadMetadata({
  title,
  description,
  canonical,
}: {
  title: string;
  description: string;
  canonical: string;
}) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link
        rel="canonical"
        href={`${process.env.NEXT_PUBLIC_BASE_URL}${canonical}`}
      />

      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#2563eb" />
    </Head>
  );
}
