import { useState, useCallback } from 'react';



function useInputs(initialForm: User) {
  const [form, setForm] = useState(initialForm);
  // change
  const onChange = useCallback(e => {
    const { name, value } = e.target;
    setForm(form => ({ ...form, [name]: value }));
  }, []);
  const reset = useCallback(() => setForm(initialForm), [initialForm]);
  return {form, onChange, reset} as const;
}

export default useInputs;