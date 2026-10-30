import React, { useState, useEffect, useRef } from 'react';
import { CheckCircle as CircleCheck, AlertCircle as CircleAlert, Send } from 'lucide-react';
import { services, timePeriods, getWhatsAppLink } from '../data/content';
import { BookingFormData, TimePeriod } from '../types';

const INITIAL_FORM_DATA: BookingFormData = {
  nome: '',
  servico: '',
  data: '',
  periodo: '',
  observacoes: '',
};

export const Booking: React.FC = () => {
  const [formData, setFormData] = useState<BookingFormData>(INITIAL_FORM_DATA);
  const [errors, setErrors] = useState<Partial<Record<keyof BookingFormData, string>>>({});
  const [submitted, setSubmitted] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof BookingFormData, string>> = {};
    if (!formData.nome.trim()) newErrors.nome = 'Informe seu nome.';
    if (!formData.servico) newErrors.servico = 'Selecione um serviço.';
    if (!formData.data) newErrors.data = 'Escolha uma data de preferência.';
    if (!formData.periodo) newErrors.periodo = 'Selecione um período.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const createWhatsAppMessage = (data: BookingFormData): string => {
    const obs = data.observacoes.trim() ? ` Observações: ${data.observacoes.trim()}.` : '';
    return `Olá, Sah! Conheci o site do Studio Sah Oliveira e gostaria de solicitar um agendamento. Meu nome é ${data.nome.trim()} e tenho interesse em ${data.servico}. Minha preferência de data é ${data.data}, no período da ${data.periodo.toLowerCase()}. Poderia me informar os horários disponíveis?${obs}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    const message = createWhatsAppMessage(formData);
    const link = getWhatsAppLink(message);
    window.open(link, '_blank', 'noopener,noreferrer');
    setSubmitted(true);

    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    timerRef.current = setTimeout(() => {
      setSubmitted(false);
      setFormData(INITIAL_FORM_DATA);
    }, 5000);
  };

  const handleChange = (field: keyof BookingFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const inputClasses =
    'w-full rounded-lg bg-purple-dark/60 border px-4 py-3 text-sm text-white placeholder:text-lilac/40 focus:outline-none focus:border-purple-electric focus:ring-1 focus:ring-purple-electric transition-colors';
  const borderError = 'border-red-400/60';
  const borderNormal = 'border-purple-electric/20';

  return (
    <section id="agendamento" className="relative py-24 lg:py-32 bg-purple-deep overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-electric/50 to-transparent" />
      <div className="absolute bottom-0 right-1/3 w-80 h-80 rounded-full bg-purple-electric/12 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-5xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-semibold tracking-[0.2em] text-purple-electric uppercase">
            Agendamento
          </span>
          <h2 className="mt-4 font-display font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight text-white text-balance">
            SEU MOMENTO COMEÇA AQUI.
          </h2>
          <p className="mt-5 text-base sm:text-lg text-lilac/70 leading-relaxed">
            Escolha o serviço desejado e entre em contato para consultar os horários disponíveis.
          </p>
        </div>

        <div className="mt-12 rounded-2xl bg-ink/80 backdrop-blur border border-purple-electric/25 p-6 sm:p-10 lg:p-12 glow-purple">
          {submitted ? (
            <div className="flex flex-col items-center justify-center py-12 text-center animate-scale-in">
              <CircleCheck size={56} className="text-purple-electric" />
              <h3 className="mt-5 font-display font-semibold text-xl text-white">
                Solicitação encaminhada!
              </h3>
              <p className="mt-2 text-sm text-lilac/70 max-w-sm">
                Abrimos o WhatsApp com sua mensagem pronta para envio. Conclua o envio para que a Sah possa responder com os horários disponíveis.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              <div>
                <label htmlFor="nome" className="block text-sm font-medium text-lilac/80 mb-2">
                  Nome <span className="text-purple-electric">*</span>
                </label>
                <input
                  id="nome"
                  type="text"
                  value={formData.nome}
                  onChange={(e) => handleChange('nome', e.target.value)}
                  placeholder="Seu nome completo"
                  className={`${inputClasses} ${errors.nome ? borderError : borderNormal}`}
                  aria-invalid={!!errors.nome}
                  required
                />
                {errors.nome && (
                  <p className="mt-1.5 flex items-center gap-1 text-xs text-red-400">
                    <CircleAlert size={13} /> {errors.nome}
                  </p>
                )}
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="servico" className="block text-sm font-medium text-lilac/80 mb-2">
                    Serviço desejado <span className="text-purple-electric">*</span>
                  </label>
                  <select
                    id="servico"
                    value={formData.servico}
                    onChange={(e) => handleChange('servico', e.target.value)}
                    className={`${inputClasses} ${errors.servico ? borderError : borderNormal}`}
                    aria-invalid={!!errors.servico}
                    required
                  >
                    <option value="">Selecione...</option>
                    {services.map((item) => (
                      <option key={item.id} value={item.title}>
                        {item.title}
                      </option>
                    ))}
                  </select>
                  {errors.servico && (
                    <p className="mt-1.5 flex items-center gap-1 text-xs text-red-400">
                      <CircleAlert size={13} /> {errors.servico}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="data" className="block text-sm font-medium text-lilac/80 mb-2">
                    Data de preferência <span className="text-purple-electric">*</span>
                  </label>
                  <input
                    id="data"
                    type="date"
                    value={formData.data}
                    onChange={(e) => handleChange('data', e.target.value)}
                    className={`${inputClasses} ${
                      errors.data ? borderError : borderNormal
                    } [color-scheme:dark]`}
                    aria-invalid={!!errors.data}
                    required
                  />
                  {errors.data && (
                    <p className="mt-1.5 flex items-center gap-1 text-xs text-red-400">
                      <CircleAlert size={13} /> {errors.data}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-lilac/80 mb-2">
                  Período preferido <span className="text-purple-electric">*</span>
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {timePeriods.map((period: TimePeriod) => (
                    <button
                      key={period}
                      type="button"
                      onClick={() => handleChange('periodo', period)}
                      className={`rounded-lg border py-3 text-sm font-medium transition-all duration-300 ${
                        formData.periodo === period
                          ? 'border-purple-electric bg-purple-electric/20 text-white'
                          : 'border-purple-electric/20 text-lilac/70 hover:border-purple-electric/40 hover:text-white'
                      }`}
                      aria-pressed={formData.periodo === period}
                    >
                      {period}
                    </button>
                  ))}
                </div>
                {errors.periodo && (
                  <p className="mt-1.5 flex items-center gap-1 text-xs text-red-400">
                    <CircleAlert size={13} /> {errors.periodo}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="observacoes"
                  className="block text-sm font-medium text-lilac/80 mb-2"
                >
                  Observações <span className="text-lilac/40 font-normal">(opcional)</span>
                </label>
                <textarea
                  id="observacoes"
                  value={formData.observacoes}
                  onChange={(e) => handleChange('observacoes', e.target.value)}
                  rows={3}
                  placeholder="Algo que gostaria que soubéssemos antes do atendimento?"
                  className={`${inputClasses} ${borderNormal} resize-none`}
                />
              </div>

              <button
                type="submit"
                className="group w-full inline-flex items-center justify-center gap-2 rounded-full bg-purple-electric px-8 py-4 text-base font-semibold text-white hover:glow-purple-strong hover:scale-[1.01] transition-all duration-300"
              >
                Solicitar agendamento
                <Send size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <p className="text-center text-xs text-lilac/50">
                Ao enviar, você será direcionada ao WhatsApp com a mensagem pronta.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
