<template>
	<UContainer>
		<UPageHero
			:title="t('user.title')"
		/>
		<AppTable
			:rows="rows"
			:columns="columns"
		/>
	</UContainer>
</template>

<script setup lang="ts">
import User from '../User';

const { t } = useI18n();
const mockUsers = [
	['Ana', 'García'],
	['Luis', 'Martínez'],
	['Sofía', 'López'],
	['Carlos', 'Hernández'],
	['Valentina', 'González'],
	['Mateo', 'Pérez'],
	['Camila', 'Rodríguez'],
	['Diego', 'Sánchez'],
	['Lucía', 'Ramírez'],
	['Sebastián', 'Torres'],
	['Mariana', 'Flores'],
	['Daniel', 'Rivera'],
	['Isabella', 'Gómez'],
	['Gabriel', 'Díaz'],
	['Emma', 'Cruz'],
	['Joaquín', 'Morales'],
	['Renata', 'Ortiz'],
	['Andrés', 'Reyes'],
	['Paula', 'Vargas'],
	['Nicolás', 'Castro'],
	['Elena', 'Jiménez'],
	['Tomás', 'Ruiz'],
	['Julia', 'Mendoza'],
	['Samuel', 'Álvarez'],
	['Mía', 'Romero'],
] as const;

const rows = ref<User[]>(mockUsers.map(([name, last_name], index) => new User({
	id: index + 1,
	name,
	last_name,
	email: `usuario${index + 1}@example.com`,
	phone: `+52 55 0000 ${String(index + 1).padStart(4, '0')}`,
})));

const columns = [
	{ accessorKey: '_full_name', header: 'Nombre completo' },
	{ accessorKey: 'email', header: 'Correo' },
	{ accessorKey: 'phone', header: 'Teléfono' },
];
</script>
