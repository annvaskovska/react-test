import React from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';

const CourseForm = ({course, allAuthors, onSave, onChange, saving, errors}) => {
  return (
    <form>
      <h1>Manage Course</h1>
      <TextInput
        name="title"
        title="Title"
        label="Title"
        value={course.title}
        onChange={onChange}
        errors={errors.title}
      />

      <SelectInput
        name="authorId"
        title="Author"
        label="Author"
        value={course.authorId}
        defaultOption="Select Author"
        options={allAuthors}
        onChange={onChange}
        errors={errors.authorId}
      />

      <TextInput
        name="category"
        title="Category"
        label="Category"
        value={course.category}
        onChange={onChange}
        errors={errors.title}
      />

      <TextInput
        name="length"
        title="Length"
        label="Length"
        value={course.length}
        onChange={onChange}
        errors={errors.length}
      />

      <input
        type="submit"
        disabled={saving}
        value={saving ? 'Saving' : 'Save'}
        className="btn btn-primary"
        onClick={onSave}
      />

    </form>
  );
};

CourseForm.propTypes = {
  course: React.PropTypes.object,
  allAuthors: React.PropTypes.array,
  onSave: React.PropTypes.func,
  onChange: React.PropTypes.func,
  saving: React.PropTypes.bool,
  errors: React.PropTypes.object
};

export default CourseForm;
