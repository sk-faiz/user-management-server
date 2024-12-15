const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const userService = require('../services');

exports.list = async (req, res) => {
    const search = req.query.search || '';

    try {
        const users = await prisma.user.findMany({
            select: {
                id: true,
                name: true,
                email: true,
                dob: true,
                createdAt: true
            },
            where: {
                OR: [
                    { name: { contains: search, mode: 'insensitive' } },  // Search by name (case-insensitive)
                    { email: { contains: search, mode: 'insensitive' } }, // Search by email (case-insensitive)
                ],
            },
            orderBy: {
                createdAt: "desc"
            }
        });
        res.status(200).json({ data: users, message: "Users Listed Successfully" });
    } catch (error) {
        res.status(500).json({ error: 'Error fetching users' });
    }
};

exports.create = async (req, res) => {
    const { name, email, password, dob } = req.body;
    try {
        const user = await userService.createUser({ name, email, password, dob });

        res.status(201).json({ data: user, message: "User added successfully" });
    } catch (error) {
        res.status(400).json({ error: "something went wrong" });
    }
};

exports.view = async (req, res) => {
    try {
        const { id } = req.params;

        const user = await prisma.user.findUnique({
            where: { id: parseInt(id) },
            select: {
                id: true,
                name: true,
                email: true,
                dob: true,
                createdAt: true
            }
        });

        if (user) {
            res.json({ data: user, message: "User found successfully" });
        } else {
            res.status(404).json({ error: 'User not found' });
        }
    } catch (err) {
        res.status(400).json({ error: 'something went wrong' });
    }
};

exports.update = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, email, dob } = req.body;

        const updatedUser = await userService.updateUser({ id, name, email, dob });

        res.json({ data: updatedUser, message: "User Updated Successfully" });
    } catch (err) {
        res.status(400).json({ error: 'User update failed' });
    }
};

exports.delete = async (req, res) => {
    try {
        const { id } = req.params;

        await prisma.user.delete({ where: { id: parseInt(id) } });

        res.json({ message: 'User deleted successfully' });
    } catch (err) {
        res.status(400).json({ error: 'User deletion failed' });
    }
};