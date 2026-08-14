import { Grid, Stack } from '@mui/material';
import { HomeHero } from '@/components/organisms/HomeHero';
import { ContentSection } from '@/components/organisms/ContentSection';
import { CollectionCard } from '@/components/molecules/CollectionCard';
import { BarazaInvitation } from '@/components/organisms/BarazaInvitation';
import { DesignButton } from '@/components/atoms/DesignButton';
import { DesignText } from '@/components/atoms/DesignText';

const collections = [
  { title: 'Books & Manuscripts', description: 'Written knowledge, historical texts, and recorded Ameru thought.', image: '/images/books.jpg', href: '/library', label: 'Read' },
  { title: 'Oral Traditions', description: 'Songs, stories, interviews, and knowledge carried through generations.', image: '/images/audio.jpg', href: '/library?type=audio', label: 'Listen' },
  { title: 'Museum & Artifacts', description: 'Objects, images, and material traces of Ameru life and memory.', image: '/images/video.jpg', href: '/museum', label: 'Explore' },
];

export default function HomePage() {
  return (
    <>
      <HomeHero
        eyebrow="Ameru Cultural Library"
        title="A living library of Ameru knowledge."
        description="Explore the books, stories, artifacts, programs, and ideas that preserve Ameru memory while opening it to new generations of inquiry."
        image="/images/featured.jpg"
        primaryAction={{ label: 'Explore the Library', href: '/library' }}
        secondaryAction={{ label: 'Visit the Museum', href: '/museum' }}
        variant="immersive"
      />

      <ContentSection
        heading={{ eyebrow: 'Discover', title: 'Explore our collections', description: 'Move between written, oral, visual, and material forms of cultural memory.' }}
      >
        <Grid container spacing={3}>
          {collections.map((collection) => (
            <Grid key={collection.title} size={{ xs: 12, md: 4 }}>
              <CollectionCard {...collection} />
            </Grid>
          ))}
        </Grid>
      </ContentSection>

      <ContentSection
        variant="subtle"
        heading={{ eyebrow: 'Featured', title: 'A work to encounter', description: 'Books and artifacts that invite deeper reading and interpretation.' }}
      >
        <Stack direction={{ xs: 'column', md: 'row' }} spacing={4} alignItems="center">
          <Stack spacing={2} flex={1}>
            <DesignText variant="title">Ameru of Kenya Lived in Egypt Long Ago</DesignText>
            <DesignText color="text.secondary">A cultural-historical work by Tarcisio F. B. Gichunge, introduced by Gichunge Wa M&apos;Thirua.</DesignText>
            <DesignButton href="/library">Explore the work</DesignButton>
          </Stack>
          <DesignText variant="caption" color="text.secondary" sx={{ maxWidth: 420 }}>
            The library brings together materials as objects of inquiry, preserving their context rather than reducing them to isolated files.
          </DesignText>
        </Stack>
      </ContentSection>

      <BarazaInvitation
        title="Where cultural memory becomes philosophical inquiry."
        description="Baraza la Ontologia is a space for recovering, articulating, and extending Ameru and African ways of asking what is real, what matters, and how knowledge is carried between generations."
        href="/baraza"
      />

      <ContentSection variant="accent" heading={{ eyebrow: 'Participate', title: 'Keep the library living', description: 'Discover programs, contribute knowledge, and help preserve cultural memory for future generations.' }}>
        <DesignButton href="/programs">Explore programs</DesignButton>
      </ContentSection>
    </>
  );
}
