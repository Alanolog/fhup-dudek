import RealizationsDetails from "@/components/realizations/realization-details";
// @ts-expect-error params
export default function RealizationsDetailsPage({ params }) {
   const slug = params.slug;
   return <RealizationsDetails slug={slug} />;
}
