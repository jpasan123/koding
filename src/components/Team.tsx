import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Linkedin, Mail, X } from 'lucide-react';

interface TeamMember {
  name: string;
  role: string;
  image: string;
  education: string;
  title: string;
  linkedin: string;
  email: string;
}

interface TeamMemberModalProps {
  member: TeamMember | null;
  isOpen: boolean;
  onClose: () => void;
}

const TeamMemberModal: React.FC<TeamMemberModalProps> = ({ member, isOpen, onClose }) => {
  if (!member) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative bg-white rounded-2xl shadow-xl max-w-lg w-full p-6 z-10"
          >
            <button
              onClick={onClose}
              className="absolute right-4 top-4 p-2 hover:bg-gray-100 rounded-full"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex flex-col items-center">
              <motion.img
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                src={member.image}
                alt={member.name}
                className="w-32 h-32 rounded-full object-cover shadow-lg"
              />
              <h3 className="text-2xl font-bold mt-4">{member.name}</h3>
              <p className="text-blue-600 font-medium">{member.role}</p>
              <p className="text-gray-600 mt-1">{member.title}</p>
              <p className="text-gray-500 mt-1">{member.education}</p>

              <div className="flex gap-4 mt-6">
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
                <a
                  href={`mailto:${member.email}`}
                  className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  Email
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

const teamMembers: TeamMember[] = [
  {
    name: 'Keerthi Kodithuwakku',
    role: 'CEO & CO Founder',
    image: 'https://i.ibb.co/spNrKHy6/464475539-8493908874024053-2062765657774756386-n-1.jpg',
    education: 'BSc. Eng (HONS)',
    title: 'Co-Founder and Chief Executive Officer',
    linkedin: 'https://www.linkedin.com/in/keerthi-kodithuwakku-b98149219/?originalSubdomain=lk',
    email: 'keerthi@example.com',
  },
  {
    name: 'Heminda Jayawardana',
    role: 'Co-Founder',
    image: 'https://i.ibb.co/QjKzJxVv/OIP-9.jpg',
    education: 'MA. User Experience Design',
    title: 'Director of User Experience',
    linkedin: 'https://www.linkedin.com/in/heminda/?originalSubdomain=lk',
    email: 'heminda@example.com',
  },
  // Add more team members as needed
];

const Team: React.FC = () => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedMember(null), 200);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Our Visionary Leader
          </h2>
          <p className="text-xl text-gray-600">Meet the minds behind Koding's innovation</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="text-center"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setSelectedMember(member);
                  setIsModalOpen(true);
                }}
                className="cursor-pointer"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-48 h-48 rounded-full mx-auto object-cover shadow-lg hover:shadow-xl transition-shadow"
                />
                <h3 className="text-2xl font-bold mt-6">{member.name}</h3>
                <p className="text-blue-600 font-medium">{member.role}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      <TeamMemberModal
        member={selectedMember}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </section>
  );
};

export default Team;