import React from 'react';
import { RouteComponentProps } from '@reach/router';
import { useForm, FormContext } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Event } from '../models/event';
import { createEvent } from '../api';
import SubmitButton from '../../../components/buttons/SubmitButton';
import FormInput from '../../../components/FormInput';
import FormTextarea from '../../../components/FormTextarea';
import SecondaryButton from '../../../components/buttons/SecondaryButton';

const CreateEvent: React.FC<RouteComponentProps> = ({ navigate }) => {
  const formMethods = useForm<Event>();
  const { t } = useTranslation(['events', 'common']);
  const { handleSubmit } = formMethods;

  const onSubmit = handleSubmit(event => {
    createEvent(event).then(() => {
      if (navigate) navigate('/events');
    });
  });

  const onCancel = () => {
    if (navigate) navigate('/events');
  };

  return (
    <div className="w-full">
      <h1 className="font-bold text-xl text-gray-800 mb-4">{t('events:createEvent')}</h1>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <FormContext {...formMethods}>
        <form onSubmit={onSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <FormInput
            id="event-name"
            name="name"
            labelText={t('events:nameLabel')}
            placeholder={t('events:namePlaceholder')}
          />
          <FormTextarea
            id="event-description"
            name="description"
            labelText={t('events:descriptionLabel')}
            placeholder={t('events:descriptionPlaceholder')}
          />
          <div className="flex items-center">
            <div className="mr-2">
              <SubmitButton>
                <FontAwesomeIcon icon="save" className="mr-2" /> {t('common:save')}
              </SubmitButton>
            </div>
            <SecondaryButton onClick={onCancel}> {t('common:cancel')}</SecondaryButton>
          </div>
        </form>
      </FormContext>
    </div>
  );
};

export default CreateEvent;
