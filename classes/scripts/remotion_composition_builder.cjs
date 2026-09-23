#!/usr/bin/env node

/**
 * Remotion Composition Builder
 * Generates beautiful animated medical presentations with:
 * - Smooth topic expansion & centering
 * - Sub-points popping in with spring animations
 * - Clinical decision pathways with step-by-step visualization
 * - Full audio-visual synchronization
 *
 * Usage: node remotion_composition_builder.cjs gastro-01
 */

const fs = require('fs');
const path = require('path');

const REMOTION_SETUP = () => `
import React from 'react';
import { AbsoluteFill, useVideoConfig, Sequence, interpolate, spring } from 'remotion';
import { ClinicalPathwayVisualization } from './components/ClinicalPathway';
import { TopicExpansion } from './components/TopicExpansion';
import { QuestionSlide } from './components/QuestionSlide';

/**
 * Main Composition Component
 * Orchestrates the entire presentation with smooth transitions
 */
export const MedicalPresentation = ({ slides, className, audioPath }) => {
  const videoConfig = useVideoConfig();
  const fps = videoConfig.fps;

  let currentFrame = 0;
  const slideDurations = slides.map(s => s.durationFrames || (fps * 10));

  return (
    <AbsoluteFill style={{ backgroundColor: '#F5F3EE' }}>
      {slides.map((slide, i) => {
        const startFrame = slideDurations.slice(0, i).reduce((a, b) => a + b, 0);
        const duration = slideDurations[i];

        return (
          <Sequence key={i} from={startFrame} durationInFrames={duration}>
            {renderSlide(slide, fps)}
          </Sequence>
        );
      })}

      {audioPath && (
        <Sequence from={0}>
          <audio src={audioPath} />
        </Sequence>
      )}
    </AbsoluteFill>
  );
};

const renderSlide = (slide, fps) => {
  switch (slide.type) {
    case 'cover':
      return <CoverSlide {...slide} />;
    case 'topic-expansion':
      return <TopicExpansionSlide {...slide} fps={fps} />;
    case 'pathway':
      return <PathwaySlide {...slide} fps={fps} />;
    case 'question':
      return <QuestionSlide {...slide} />;
    default:
      return <div>Unknown slide type</div>;
  }
};

/**
 * Cover Slide - Clean title and metadata
 */
const CoverSlide = ({ title, subtitle, badges }) => (
  <AbsoluteFill
    style={{
      justifyContent: 'center',
      alignItems: 'center',
      backgroundImage: 'linear-gradient(135deg, #F5F3EE 0%, #EDEAE2 100%)',
      padding: '60px 40px',
      textAlign: 'center',
    }}
  >
    <div>
      <h1 style={{ fontSize: '56px', fontWeight: 800, margin: '0 0 24px 0', color: '#111' }}>
        {title}
      </h1>
      <p style={{ fontSize: '20px', color: '#666', margin: '0 0 32px 0' }}>
        {subtitle}
      </p>
      <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
        {badges?.map((b, i) => (
          <span
            key={i}
            style={{
              padding: '10px 18px',
              borderRadius: '8px',
              background: b.bg,
              color: b.color,
              border: \`2px solid \${b.border}\`,
              fontWeight: 600,
              fontSize: '14px',
            }}
          >
            {b.label}
          </span>
        ))}
      </div>
    </div>
  </AbsoluteFill>
);

/**
 * Topic Expansion Slide
 * Centers a topic and pops in sub-points with spring animation
 */
const TopicExpansionSlide = ({ title, topics, fps }) => {
  const frameCount = useVideoConfig().durationInFrames;

  return (
    <AbsoluteFill
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5F3EE',
        padding: '40px',
      }}
    >
      <div style={{ maxWidth: '700px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '40px', fontWeight: 700, marginBottom: '40px', color: '#0c4a6e' }}>
          {title}
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {topics?.map((topic, i) => {
            // Each topic pops in sequentially
            const delay = i * 20; // 20 frames between each
            const pointScaleProgress = spring({
              fps,
              frame: frameCount - delay,
              config: { damping: 10, mass: 1, overshootClamping: false },
              durationInFrames: 25,
            });

            const scale = interpolate(pointScaleProgress, [0, 1], [0.8, 1]);
            const opacity = interpolate(pointScaleProgress, [0, 1], [0, 1]);

            return (
              <div
                key={i}
                style={{
                  padding: '16px 20px',
                  background: '#e0f2fe',
                  borderLeft: '3px solid #0284c7',
                  borderRadius: '8px',
                  fontSize: '16px',
                  lineHeight: '1.5',
                  fontWeight: 600,
                  color: '#0c4a6e',
                  transform: \`scale(\${scale})\`,
                  opacity,
                  transformOrigin: 'center',
                }}
              >
                {topic}
              </div>
            );
          })}
        </div>
      </div>
    </AbsoluteFill>
  );
};

/**
 * Pathway Slide
 * Visualizes clinical decision trees step-by-step
 */
const PathwaySlide = ({ title, steps, fps }) => {
  return (
    <AbsoluteFill
      style={{
        backgroundColor: '#F5F3EE',
        padding: '40px',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div style={{ maxWidth: '800px', width: '100%' }}>
        <h2 style={{ fontSize: '36px', fontWeight: 700, marginBottom: '40px', textAlign: 'center', color: '#111' }}>
          {title}
        </h2>
        <ClinicalPathwayVisualization steps={steps} fps={fps} />
      </div>
    </AbsoluteFill>
  );
};

/**
 * Question Slide - Full-width options
 */
const QuestionSlideComponent = ({ stem, options, correct }) => (
  <AbsoluteFill
    style={{
      backgroundColor: '#F5F3EE',
      padding: '40px',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <div style={{ maxWidth: '900px', width: '100%' }}>
      <div style={{ fontSize: '22px', fontWeight: 600, marginBottom: '32px', lineHeight: '1.6' }}>
        {stem}
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {options?.map((opt, i) => (
          <div
            key={i}
            style={{
              width: '100%',
              padding: '20px 24px',
              background: opt.id === correct ? '#f0fdf4' : '#ffffff',
              border: \`2px solid \${opt.id === correct ? '#16a34a' : '#ddd'}\`,
              borderRadius: '8px',
              fontSize: '18px',
              lineHeight: '1.5',
              fontWeight: opt.id === correct ? 600 : 400,
              color: opt.id === correct ? '#14532d' : '#333',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
            }}
          >
            <strong>{opt.id}.</strong> {opt.text}
          </div>
        ))}
      </div>
    </div>
  </AbsoluteFill>
);
`;

const CLINICAL_PATHWAY_COMPONENT = () => `
import React, { useMemo } from 'react';
import { useVideoConfig, interpolate, spring } from 'remotion';

/**
 * Animated Clinical Pathway Visualization
 * Renders decision trees with step-by-step node revealing
 */
export const ClinicalPathwayVisualization = ({ steps, fps }) => {
  const videoConfig = useVideoConfig();

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {steps?.map((step, i) => {
        const stepDelay = i * 30; // 30 frames between each step
        const frame = videoConfig.durationInFrames - stepDelay;

        // Spring animation for node entrance
        const springVal = spring({
          fps,
          frame: Math.max(0, frame),
          config: { damping: 10, mass: 1.2 },
          durationInFrames: 20,
        });

        const y = interpolate(springVal, [0, 1], [40, 0]);
        const opacity = interpolate(springVal, [0, 1], [0, 1]);
        const scale = interpolate(springVal, [0, 1], [0.85, 1]);

        return (
          <div
            key={i}
            style={{
              transform: \`translateY(\${y}px) scale(\${scale})\`,
              opacity,
              transformOrigin: 'center',
            }}
          >
            {renderPathwayNode(step, i)}
          </div>
        );
      })}
    </div>
  );
};

const renderPathwayNode = (step, index) => {
  const baseStyle = {
    padding: '18px 24px',
    borderRadius: '10px',
    textAlign: 'center',
    fontWeight: 600,
    fontSize: '16px',
    minHeight: '60px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
  };

  if (step.type === 'entry') {
    return (
      <div style={{ ...baseStyle, background: '#e2e8f0', border: '2px solid #cbd5e1', color: '#0f172a' }}>
        {step.label}
      </div>
    );
  }

  if (step.type === 'decision') {
    return (
      <div style={{ ...baseStyle, background: '#e0f2fe', border: '2px solid #0284c7', color: '#0c4a6e' }}>
        {step.label}
      </div>
    );
  }

  if (step.type === 'branch') {
    return (
      <div style={{ display: 'flex', gap: '16px', width: '100%' }}>
        {/* SÍ Branch */}
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: '12px', fontWeight: 700, marginBottom: '8px', color: '#14532d' }}>
            ✓ SÍ
          </div>
          {step.yes?.map((item, i) => (
            <div
              key={i}
              style={{
                ...baseStyle,
                background: '#f0fdf4',
                border: '2px solid #16a34a',
                color: '#14532d',
                marginBottom: i < step.yes.length - 1 ? '8px' : '0',
                fontSize: '14px',
              }}
            >
              {item}
            </div>
          ))}
        </div>

        {/* NO Branch */}
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: '12px', fontWeight: 700, marginBottom: '8px', color: '#7f1d1d' }}>
            ✗ NO
          </div>
          {step.no?.map((item, i) => (
            <div
              key={i}
              style={{
                ...baseStyle,
                background: '#fef2f2',
                border: '2px solid #dc2626',
                color: '#7f1d1d',
                marginBottom: i < step.no.length - 1 ? '8px' : '0',
                fontSize: '14px',
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (step.type === 'conduct') {
    return (
      <div
        style={{
          ...baseStyle,
          background: step.warning ? '#fef2f2' : '#f0fdf4',
          border: step.warning ? '2px solid #dc2626' : '2px solid #16a34a',
          color: step.warning ? '#7f1d1d' : '#14532d',
          fontWeight: 700,
        }}
      >
        {step.label}
      </div>
    );
  }

  return null;
};
`;

const TOPIC_EXPANSION_COMPONENT = () => `
import React from 'react';
import { useVideoConfig, interpolate, spring } from 'remotion';

/**
 * Topic Expansion Component
 * Expands a topic in the center with sub-points popping in
 */
export const TopicExpansion = ({ title, points, fps }) => {
  const videoConfig = useVideoConfig();

  // Main topic scale-up animation
  const titleFrame = 0;
  const titleSpring = spring({
    fps,
    frame: videoConfig.durationInFrames - titleFrame,
    config: { damping: 8, mass: 0.8 },
    durationInFrames: 30,
  });

  const titleScale = interpolate(titleSpring, [0, 1], [0.7, 1]);
  const titleOpacity = interpolate(titleSpring, [0, 1], [0, 1]);

  return (
    <div style={{ textAlign: 'center', padding: '40px' }}>
      {/* Main Topic Title */}
      <h2
        style={{
          fontSize: '44px',
          fontWeight: 800,
          margin: '0 0 40px 0',
          color: '#0c4a6e',
          transform: \`scale(\${titleScale})\`,
          opacity: titleOpacity,
          transformOrigin: 'center',
        }}
      >
        {title}
      </h2>

      {/* Sub-points Pop In */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '600px', margin: '0 auto' }}>
        {points?.map((point, i) => {
          const delay = i * 12; // Each point pops in 12 frames apart
          const pointFrame = videoConfig.durationInFrames - delay;

          const pointSpring = spring({
            fps,
            frame: Math.max(0, pointFrame),
            config: { damping: 12, mass: 1.1 },
            durationInFrames: 20,
          });

          const pointY = interpolate(pointSpring, [0, 1], [20, 0]);
          const pointOpacity = interpolate(pointSpring, [0, 1], [0, 1]);
          const pointScale = interpolate(pointSpring, [0, 1], [0.9, 1]);

          return (
            <div
              key={i}
              style={{
                padding: '14px 18px',
                background: '#e0f2fe',
                borderLeft: '3px solid #0284c7',
                borderRadius: '6px',
                fontSize: '15px',
                fontWeight: 600,
                color: '#0c4a6e',
                lineHeight: '1.5',
                transform: \`translateY(\${pointY}px) scale(\${pointScale})\`,
                opacity: pointOpacity,
                transformOrigin: 'center',
              }}
            >
              {point}
            </div>
          );
        })}
      </div>
    </div>
  );
};
`;

const QUESTION_COMPONENT = () => `
import React from 'react';
import { AbsoluteFill } from 'remotion';

/**
 * Question Slide Component
 * Displays medical questions with full-width option layout
 */
export const QuestionSlide = ({ stem, options, explanation, correctAnswer }) => {
  return (
    <AbsoluteFill
      style={{
        backgroundColor: '#F5F3EE',
        padding: '40px',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        overflow: 'auto',
      }}
    >
      <div style={{ maxWidth: '1000px', margin: '0 auto', width: '100%' }}>
        {/* Question Stem */}
        <div style={{ marginBottom: '32px' }}>
          <div style={{ fontSize: '20px', fontWeight: 600, lineHeight: '1.6', color: '#111' }}>
            {stem}
          </div>
        </div>

        {/* Options - Full Width */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '32px' }}>
          {options?.map((opt, i) => (
            <div
              key={i}
              style={{
                width: '100%',
                padding: '18px 20px',
                background: opt.id === correctAnswer ? '#f0fdf4' : '#ffffff',
                border: \`2px solid \${opt.id === correctAnswer ? '#16a34a' : '#ddd'}\`,
                borderRadius: '8px',
                fontSize: '16px',
                lineHeight: '1.5',
                fontWeight: opt.id === correctAnswer ? 600 : 400,
                color: opt.id === correctAnswer ? '#14532d' : '#333',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
            >
              <strong>{opt.id}.</strong> {opt.text}
            </div>
          ))}
        </div>

        {/* Explanation */}
        {explanation && (
          <div
            style={{
              padding: '20px 24px',
              background: '#f9fafb',
              borderLeft: '3px solid #0284c7',
              borderRadius: '6px',
            }}
          >
            <h4 style={{ margin: '0 0 12px 0', fontSize: '14px', fontWeight: 700 }}>
              Explicación:
            </h4>
            <p style={{ margin: 0, fontSize: '14px', lineHeight: '1.6', color: '#333' }}>
              {explanation}
            </p>
          </div>
        )}
      </div>
    </AbsoluteFill>
  );
};
`;

function generateRemotionProject(classId) {
  const projectDir = path.join(__dirname, '../remotion_studio');

  // Create directory structure
  if (!fs.existsSync(projectDir)) {
    fs.mkdirSync(projectDir, { recursive: true });
  }

  const srcDir = path.join(projectDir, 'src');
  const componentsDir = path.join(srcDir, 'components');
  const compositionsDir = path.join(srcDir, 'compositions');

  [srcDir, componentsDir, compositionsDir].forEach(dir => {
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  });

  // Write main composition
  fs.writeFileSync(
    path.join(compositionsDir, `${classId}_composition.jsx`),
    REMOTION_SETUP()
  );

  // Write components
  fs.writeFileSync(
    path.join(componentsDir, 'ClinicalPathway.jsx'),
    CLINICAL_PATHWAY_COMPONENT()
  );

  fs.writeFileSync(
    path.join(componentsDir, 'TopicExpansion.jsx'),
    TOPIC_EXPANSION_COMPONENT()
  );

  fs.writeFileSync(
    path.join(componentsDir, 'QuestionSlide.jsx'),
    QUESTION_COMPONENT()
  );

  console.log(`✓ Remotion composition generated for ${classId}`);
  console.log(`  Location: ${projectDir}`);
  console.log(`  To render: npx remotion render ${path.join(compositionsDir, \`${classId}_composition.jsx\`)}`);
}

// CLI
const classId = process.argv[2] || 'gastro-01';
generateRemotionProject(classId);
