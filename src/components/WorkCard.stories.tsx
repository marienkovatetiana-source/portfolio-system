import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import cover from "@/assets/okvada-cover.jpg";
import { WorkCard } from "./WorkCard";

const meta = {
  title: "Components/WorkCard",
  component: WorkCard,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
Картка роботи для списку проєктів: обкладинка, назва, короткий опис. Уся картка — одне посилання на сторінку кейсу.

**Параметри**
- \`title\`: назва роботи.
- \`description\`: короткий опис, тип проєкту одним рядком.
- \`cover\`: обкладинка; картинку імпортують з теки \`assets\`, не з \`public\`.
- \`coverAlt\`: alt-текст обкладинки; за замовчуванням порожній, бо назва вже є в тексті посилання.
- \`href\`: адреса сторінки кейсу.

**Варіанти й стани**
Варіант один. Стани:
- default: заливка \`surface\`, межа \`line\`.
- hover: межа стає \`ink-muted\`, назва підкреслюється.
- focus: контур \`ink\` з відступом, видно при навігації клавішею Tab.

**Токени**
- Кольори: \`surface\`, \`line\`, \`ink\`, \`ink-muted\`.
- Текст: назва \`text-heading\` з \`font-display\`; опис \`text-body\` з \`font-text\`.
- Кути: \`rounded-card\` (картка й обкладинка).
- Пропорція обкладинки: \`aspect-cover\`.
- Відступи: поле картки \`p-3\`, проміжок між обкладинкою й текстом \`gap-4\`, між назвою й описом \`gap-2\`, поля тексту \`px-2 pb-2\`.

**Коли використовувати**
У списку обраних робіт на головній і на сторінці «Роботи». Три картки в ряд на широкому екрані, одна в колонку на вузькому.

**Коли не використовувати**
Не став усередину картки інші кнопки чи посилання: уся картка вже є посиланням. Для іншого контенту (стаття, послуга) краще окремий компонент.

**Як брати в код**
\`\`\`tsx
import cover from "@/assets/okvada.jpg";
import { WorkCard } from "@/components/WorkCard";

<WorkCard
  title="OKVADA"
  description="Corporate website for a transport company"
  cover={cover}
  href="/work/okvada"
/>
\`\`\`
`,
      },
    },
  },
  argTypes: {
    title: { control: "text" },
    description: { control: "text" },
    href: { control: "text" },
    coverAlt: { control: "text" },
    cover: { control: false },
  },
  args: {
    title: "OKVADA",
    description: "Corporate website for a transport company",
    cover,
    coverAlt: "",
    href: "#",
  },
} satisfies Meta<typeof WorkCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};
