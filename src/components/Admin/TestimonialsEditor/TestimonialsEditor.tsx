import React, { useState, useEffect } from 'react';
import { Testimonial } from '../../../types';
import { testimonialsData } from '../../../data/siteData';
import styles from './TestimonialsEditor.module.css';

const TestimonialsEditor: React.FC = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>(testimonialsData);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [newTestimonial, setNewTestimonial] = useState<Testimonial>({
    id: Date.now(),
    quote: '',
    author: '',
    position: ''
  });

  useEffect(() => {
    const savedTestimonials = localStorage.getItem('adminTestimonials');
    if (savedTestimonials) {
      setTestimonials(JSON.parse(savedTestimonials));
    }
  }, []);

  const saveToStorage = (testimonials: Testimonial[]) => {
    localStorage.setItem('adminTestimonials', JSON.stringify(testimonials));
  };

  const handleSave = () => {
    saveToStorage(testimonials);
    alert('Testimonials saved successfully!');
  };

  const handleAddTestimonial = () => {
    if (!newTestimonial.quote.trim() || !newTestimonial.author.trim()) {
      alert('Please fill in the quote and author fields');
      return;
    }

    const updated = [...testimonials, { ...newTestimonial, id: Date.now() }];
    setTestimonials(updated);
    saveToStorage(updated);
    setNewTestimonial({ id: Date.now(), quote: '', author: '', position: '' });
  };

  const handleEditTestimonial = (index: number, testimonial: Testimonial) => {
    const updated = [...testimonials];
    updated[index] = testimonial;
    setTestimonials(updated);
    saveToStorage(updated);
    setEditingIndex(null);
  };

  const handleDeleteTestimonial = (index: number) => {
    if (window.confirm('Are you sure you want to delete this testimonial?')) {
      const updated = testimonials.filter((_, i) => i !== index);
      setTestimonials(updated);
      saveToStorage(updated);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>Testimonials Editor</h2>
        <p>Manage testimonials and reviews displayed on your website</p>
      </div>

      {/* Add New Testimonial Form */}
      <div className={styles.addForm}>
        <h3>Add New Testimonial</h3>
        <div className={styles.formContent}>
          <div className={styles.inputGroup}>
            <label>Quote *</label>
            <textarea
              value={newTestimonial.quote}
              onChange={(e) => setNewTestimonial({ ...newTestimonial, quote: e.target.value })}
              placeholder="Enter the testimonial quote..."
              rows={4}
              className={styles.textarea}
            />
          </div>
          <div className={styles.formRow}>
            <div className={styles.inputGroup}>
              <label>Author *</label>
              <input
                type="text"
                value={newTestimonial.author}
                onChange={(e) => setNewTestimonial({ ...newTestimonial, author: e.target.value })}
                placeholder="e.g., John Doe"
              />
            </div>
            <div className={styles.inputGroup}>
              <label>Position/Role</label>
              <input
                type="text"
                value={newTestimonial.position}
                onChange={(e) => setNewTestimonial({ ...newTestimonial, position: e.target.value })}
                placeholder="e.g., Parent, Alumni, Faculty"
              />
            </div>
            <button className={styles.addButton} onClick={handleAddTestimonial}>
              Add Testimonial
            </button>
          </div>
        </div>
      </div>

      {/* Existing Testimonials */}
      <div className={styles.testimonialsList}>
        <h3>Current Testimonials</h3>
        {testimonials.length === 0 ? (
          <div className={styles.emptyState}>
            <div className={styles.emptyIcon}>💬</div>
            <p>No testimonials found. Add your first testimonial above.</p>
          </div>
        ) : (
          <div className={styles.testimonialsGrid}>
            {testimonials.map((testimonial, index) => (
              <div key={testimonial.id} className={styles.testimonialCard}>
                {editingIndex === index ? (
                  <EditForm
                    testimonial={testimonial}
                    onSave={(updatedTestimonial) => handleEditTestimonial(index, updatedTestimonial)}
                    onCancel={() => setEditingIndex(null)}
                  />
                ) : (
                  <TestimonialDisplay
                    testimonial={testimonial}
                    onEdit={() => setEditingIndex(index)}
                    onDelete={() => handleDeleteTestimonial(index)}
                  />
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      <div className={styles.actions}>
        <button className={styles.saveButton} onClick={handleSave}>
          Save All Changes
        </button>
      </div>
    </div>
  );
};

interface TestimonialDisplayProps {
  testimonial: Testimonial;
  onEdit: () => void;
  onDelete: () => void;
}

const TestimonialDisplay: React.FC<TestimonialDisplayProps> = ({ 
  testimonial, 
  onEdit, 
  onDelete 
}) => (
  <div className={styles.testimonialDisplay}>
    <div className={styles.testimonialContent}>
      <div className={styles.quoteIcon}>"</div>
      <div className={styles.quote}>{testimonial.quote}</div>
      <div className={styles.attribution}>
        <div className={styles.author}>{testimonial.author}</div>
        {testimonial.position && (
          <div className={styles.position}>{testimonial.position}</div>
        )}
      </div>
    </div>
    <div className={styles.cardActions}>
      <button className={styles.editBtn} onClick={onEdit}>Edit</button>
      <button className={styles.deleteBtn} onClick={onDelete}>Delete</button>
    </div>
  </div>
);

interface EditFormProps {
  testimonial: Testimonial;
  onSave: (testimonial: Testimonial) => void;
  onCancel: () => void;
}

const EditForm: React.FC<EditFormProps> = ({ testimonial, onSave, onCancel }) => {
  const [editTestimonial, setEditTestimonial] = useState<Testimonial>(testimonial);

  return (
    <div className={styles.editForm}>
      <div className={styles.editFormContent}>
        <div className={styles.inputGroup}>
          <label>Quote</label>
          <textarea
            value={editTestimonial.quote}
            onChange={(e) => setEditTestimonial({ ...editTestimonial, quote: e.target.value })}
            placeholder="Enter the testimonial quote..."
            rows={4}
            className={styles.textarea}
          />
        </div>
        <div className={styles.inputGroup}>
          <label>Author</label>
          <input
            type="text"
            value={editTestimonial.author}
            onChange={(e) => setEditTestimonial({ ...editTestimonial, author: e.target.value })}
            placeholder="e.g., John Doe"
          />
        </div>
        <div className={styles.inputGroup}>
          <label>Position/Role</label>
          <input
            type="text"
            value={editTestimonial.position}
            onChange={(e) => setEditTestimonial({ ...editTestimonial, position: e.target.value })}
            placeholder="e.g., Parent, Alumni, Faculty"
          />
        </div>
        <div className={styles.editActions}>
          <button className={styles.saveBtn} onClick={() => onSave(editTestimonial)}>Save</button>
          <button className={styles.cancelBtn} onClick={onCancel}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsEditor;