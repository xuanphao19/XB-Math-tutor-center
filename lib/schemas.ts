// lib/schemas.ts
import { z } from "zod";

/* =========================
        COMMON
========================= */
export const ID = z.string().uuid();
export const Timestamp = z.date().default(() => new Date());

/* =========================
    1. USER (Student + Teacher + Admin)
========================= */
export const UserSchema = z.object({
  id: ID.optional(),
  fullName: z.string().min(2).max(100),
  email: z.string().email().optional(),
  phone: z.string().regex(/^(0[3|5|7|8|9])[0-9]{8}$/).optional(),

  role: z.enum(["student", "teacher", "admin"]).default("student"),
  status: z.enum(["active", "inactive"]).default("active"),

  classGrade: z.enum([
    "Lớp 6",
    "Lớp 7",
    "Lớp 8",
    "Lớp 9",
    "Đã thi vào 10"
  ]).optional(),

  level: z.enum(["Mất gốc", "Trung bình", "Khá"]).optional(),

  createdAt: Timestamp,
  updatedAt: z.date().optional()
});

/* =========================
    2. PARENT
========================= */
export const ParentSchema = z.object({
  id: ID.optional(),
  fullName: z.string().min(2),
  phone: z.string().regex(/^(0[3|5|7|8|9])[0-9]{8}$/),
  zaloId: z.string().optional(),

  studentIds: z.array(ID), // 1 phụ huynh - nhiều học sinh
  receiveReport: z.boolean().default(true),

  createdAt: Timestamp
});

/* =========================
    3. COURSE
========================= */
export const CourseSchema = z.object({
  id: ID.optional(),
  title: z.string(),
  description: z.string().optional(),

  subject: z.enum(["Toán", "Hóa"]),
  grade: z.number(),

  price: z.number().default(0),
  isPublished: z.boolean().default(false),

  createdAt: Timestamp
});

/* =========================
    4. LESSON
========================= */
export const LessonSchema = z.object({
  id: ID.optional(),

  courseId: ID,
  title: z.string().min(5),
  description: z.string().optional(),

  order: z.number().int().min(1),
  phase: z.enum(["Hồi sinh", "Lấp lỗ hổng", "Tăng tốc"]),

  subject: z.enum(["Toán", "Hóa"]),

  videoUrl: z.string().url().optional(),
  pdfUrl: z.string().url().optional(),

  durationMinutes: z.number().optional(),
  isFree: z.boolean().default(false),

  createdAt: Timestamp
});

/* =========================
    5. QUESTION (BANK)
========================= */
export const QuestionSchema = z.object({
  id: ID.optional(),
  content: z.string(), // hỗ trợ LaTeX
  type: z.enum(["single", "multiple", "text"]),

  subject: z.enum(["Toán", "Hóa"]),
  difficulty: z.number().min(1).max(5),

  options: z.array(
    z.object({
      id: z.string(),
      content: z.string(),
      isCorrect: z.boolean()
    })
  ).optional(),

  explanation: z.string().optional(),

  createdAt: Timestamp
});

/* =========================
   6. EXERCISE / QUIZ
========================= */
export const ExerciseSchema = z.object({
  id: ID.optional(),

  title: z.string(),
  type: z.enum(["Trắc nghiệm", "Tự luận", "Thi thử"]),

  subject: z.enum(["Toán", "Hóa"]),
  level: z.enum(["Mất gốc", "Trung bình", "Khá"]),

  questionIds: z.array(ID), // 🔥 TÁCH KHỎI QUESTIONS

  timeLimitMinutes: z.number().optional(),
  isFree: z.boolean().default(false),

  createdAt: Timestamp
});

/* =========================
    7. SUBMISSION (BÀI LÀM)
========================= */
export const SubmissionSchema = z.object({
  id: ID.optional(),

  studentId: ID,
  exerciseId: ID,

  score: z.number().min(0).max(10),

  answers: z.array(
    z.object({
      questionId: ID,
      answer: z.string(),
      isCorrect: z.boolean()
    })
  ),

  createdAt: Timestamp
});

/* =========================
    8. FLASHCARD
========================= */
export const FlashcardSchema = z.object({
  id: ID.optional(),

  lessonId: ID.optional(),

  front: z.string(),
  back: z.string(),

  subject: z.enum(["Toán", "Hóa"]),
  difficulty: z.enum(["Dễ", "Trung bình", "Khó"]).default("Trung bình"),

  tags: z.array(z.string()).optional(),

  createdAt: Timestamp
});

/* =========================
    9. FLASHCARD PROGRESS (SPACED REPETITION)
========================= */
export const FlashcardProgressSchema = z.object({
  id: ID.optional(),

  studentId: ID,
  flashcardId: ID,

  level: z.number().default(1),
  lastReviewedAt: z.date().optional(),
  nextReviewAt: z.date().optional()
});

/* =========================
    10. PROGRESS (UNIFIED)
========================= */
export const ProgressSchema = z.object({
  id: ID.optional(),

  studentId: ID,

  type: z.enum(["lesson", "exercise", "flashcard"]),
  refId: ID,

  status: z.enum(["Not started", "In progress", "Completed"]),

  score: z.number().optional(),

  attempts: z.number().default(0),

  lastAttemptAt: z.date().optional(),
  completedAt: z.date().optional()
});

/* =========================
    11. COMMUNITY (Q&A)
========================= */
export const ThreadSchema = z.object({
  id: ID.optional(),

  title: z.string().min(5),
  content: z.string(),

  authorId: ID,
  subject: z.enum(["Toán", "Hóa"]),

  lessonId: ID.optional(),

  tags: z.array(z.string()).optional(),

  isResolved: z.boolean().default(false),
  votes: z.number().default(0),

  createdAt: Timestamp
});

export const CommentSchema = z.object({
  id: ID.optional(),

  threadId: ID,
  authorId: ID,

  content: z.string().min(1),
  parentId: ID.optional(),

  createdAt: Timestamp
});